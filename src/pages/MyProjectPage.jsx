import { useState, useEffect } from "react";
import FooterLayout from "../components/Footer/FooterLayout";
import HeaderLayout from "../components/Header/HeaderLayout";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function MyProjectPage() {
  //State
  const [projectList, setProjectList] = useState([]);
  //display my projects only
  const [myProjects, setMyProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
      .then((results) => {
        return results.json();
    })
    .then((data) => {
      setProjectList(data);
    })
    //my projects only
    .then(async (data) => {
      setMyProjects(data);
      const userId = data.owner;
      const results = await fetch(`${import.meta.env.VITE_API_URL}projects/`);
      const data_1 = await results.json();
      return setOwner(data_1); 

  });
  }, []);


  return (
    <>
      <HeaderLayout /><div>
        <h1> View all of my Projects: </h1>
        <div id="project-list">
          {projectList.map((project, key) => {
            return <ProjectCard key={key} projectData={project} />;
          })}
        </div>
      </div>
      <FooterLayout />
    </>
  );
}

export default MyProjectPage;