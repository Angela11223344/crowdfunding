import { useState, useEffect } from "react";
import FooterLayout from "../components/Footer/FooterLayout";
import HeaderLayout from "../components/Header/HeaderLayout";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import SearchBar from "../components/SearchBar/SearchBar";
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
      <SearchBar />
    </div>
    <div>
      <div className="title">
        <img className ="bricks1" src="bricks.png" alt="Logo Bricks"></img>
        <img className="bricks2" src="bricks.png" alt="Logo Bricks"></img>
        <h1> We Want Your Pre-Loved Lego Bricks!!! </h1>
      
        <div className="header-background">
            <img className="main-lego-image" src="legoConstruction.jpg" alt="MichaelangLego Building"></img>
        </div>
      </div>
        <h2> Help Us To Build Something Amazing! Donate your used Lego to MichaelangLego Designs and see things come to life!</h2>
        <p>What do you want us to create?</p>

        <div id="project-list">
          {projectList.map((project, key) => {
            return <ProjectCard key={key} projectData={project} />;
          })}
        </div>
      </div>
      <div>
      <FooterLayout />
      </div>
    </>
  );
}

export default HomePage;