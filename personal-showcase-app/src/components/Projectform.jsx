import { useState } from "react";

function Projectform({ onAddProject }) {
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (!name) return;

        onAddProject({ name });
        setName("");
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input
             type="text"
             placeholder="Enter project"
             value="{name}"
             onChange={(e) => setName(e.target.value)}
             />
             <button>Add</button>
        </form>
    );
}

export default Projectform;