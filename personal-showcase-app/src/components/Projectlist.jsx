function Projectlist({ projects}) {
    return (
        <div>
            <h2>Projects</h2>

            {projects.length === 0 ? (
                <p> No Project yet</p>
            ) : (
                <ul>
                    {projects.map((projects, index) => (
                        <li key = {index}>{projects}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Projectlist;