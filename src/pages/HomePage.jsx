import { useState, useEffect } from "react";
import HeaderLayout from "../components/Header/HeaderLayout";

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
    <>
    <div>
      <HeaderLayout />
    </div>
    <div>
      <div className="title">
        <h1> We Want Your Pre-Loved Lego Bricks!!! </h1>
        <div className="header-background">
            <img className="main-lego-image" src="public/legoConstruction.jpg" alt="MichaelangLego Building"></img>
        </div>
      </div>
        <h2> Donate your used Lego to MichaelangLego Designs and see things come to life!</h2>
        <p>What will you decide to create? </p>

        <div id="project-list">
          {projectList.map((project, key) => {
            return <ProjectCard key={key} projectData={project} />;
          })}
        </div>
      </div>
    </>
  );
}

export default HomePage;