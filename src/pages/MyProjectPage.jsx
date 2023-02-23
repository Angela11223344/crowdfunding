import { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function MyProjectPage() {
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
      <h1> View all of my Projects: </h1>
    <div id="project-list">
      {projectList.map((project, key) => {
        return <ProjectCard key={key} projectData={project} />;
      })}
    </div>
    </div>
  );
}

export default MyProjectPage;