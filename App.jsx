
function Header() {
    return (
        <header>
            <p>React fundamentals</p>
            <h1>Germaine's Profile</h1>
        </header>
    );
}

function Footer() {
    return (
        <footer>
            <p>2026 Germaine's Profile. All rights reserved.</p>
        </footer>
    );
}

function ProfileCard({ name, bio, subject }) {
    return (
        <section>
            <div aria-hidden="true">GR</div>
            <div>
                <p>Profile</p>
                <h2>{name}</h2>
                <p>{bio}</p>
                <p><strong>Favorite subject:</strong> {subject}</p>
            </div>
        </section>
    );
}

function App() {
    const [message, setMessage] = React.useState("Welcome to my React practice app!");
    const [task, setTask] = React.useState("");
    const [tasks, setTasks] = React.useState([]);

    function addTask(event) {
        event.preventDefault();
        const trimmedTask = task.trim();
        if (!trimmedTask) return;
        setTasks((currentTasks) => [...currentTasks, trimmedTask]);
        setTask("");
    }

    return (
        <div>
            <Header />
            <main>
                <ProfileCard
                    name="Germaine"
                    bio="A developer learning React."
                    subject="Math"
                />

                <section>
                    <div>
                        <p>Interactive message</p>
                        <h2>{message}</h2>
                    </div>
                    <div>
                        <button onClick={() => setMessage("Thanks for stopping by!")}>Change message</button>
                    </div>
                </section>

                <section>
                    <p>Task list</p>
                    <h2>What are you working on?</h2>
                    <form onSubmit={addTask}>
                        <label htmlFor="task">New task</label>
                        <div>
                            <input
                                id="task"
                                value={task}
                                onChange={(event) => setTask(event.target.value)}
                                placeholder="e.g. Practice React props"
                            />
                            <button type="submit">Add task</button>
                        </div>
                    </form>
                    <div>
                        <div>
                            {tasks.length === 0 ? (
                                <p>No tasks yet. Add one to get started.</p>
                            ) : (
                                <ul>
                                    {tasks.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
                                </ul>
                            )}
                        </div>
                        <button
                            onClick={() => setTasks([])}
                            disabled={tasks.length === 0}
                        >
                            Clear tasks
                        </button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}