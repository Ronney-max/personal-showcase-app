import  { useState } from "react";
import React from "react";
import Projectform from "./components/Projectform";
import Projectlist from "./components/Projectlist";
import Searchbar from "./components/Searchbar";
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
      <Searchbar search={search} setSearch={setSearch} />
      <Projectlist projects={filteredProjects} />
     </div>
  );
}

export default App;
