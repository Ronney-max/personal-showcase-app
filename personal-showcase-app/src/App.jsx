import { useState } from "react";
import Projectform from "./components/Projectform";
import Projectist from "./components/Projectlist";
import Searcbar from "./components/Searchbar";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState("")

  function addProject(project) {
    setProjects([...projects, project]);
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
);

  return (
     <div className="container">
      <h1> Project Manager</h1>
      <Projectform onAddProject={addProject} />
      <Searcbar search={search} setSearch={setSearch} />
      <Projectist projects={filteredProjects} />
     </div>
  );
}

export default App;
