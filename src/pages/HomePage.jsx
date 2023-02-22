import { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// Data
//import { allProjects } from "../data";

function HomePage() {
  //State
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
      .then((results) => {
        return results.json();
    })
    .then((data) => {
      setProjectList(data);
    });
  }, []);


  return (
    <div>
      <h1> Donate Your Lego! </h1>
      <h2> Donate your used Lego to MichaelangLego Designs and see things come to life in the form of actual-sized </h2>
    <div id="project-list">
      {projectList.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
      })}
    </div>
    </div>
  );
}

export default HomePage;