//Data
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import HeaderLayout from "../components/Header/HeaderLayout";
import PledgeFormPage from "../pages/PledgeFormPage";

//Dummy data
//import { oneProject } from "../data";

function ProjectPage() {
  //State
  const [project, setProject] = useState({ pledges: [] });
  const [owner, setOwner] = useState([]);

  //Hooks
  const { id } = useParams();

  //const { loggedIn, setLoggedIn } = props

  //Effects
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
      .then((results) => {
  //       setProject(data);
  //       return results.json();
  //     })

  //       .catch((error) => {
  //       console.error(error)
  //     });
  // }, []);

        return results.json();
      })
      .then(async (data) => {
        setProject(data);
        const userId = data.owner;
        const results = await fetch(`${import.meta.env.VITE_API_URL}users/${userId}`);
        const data_1 = await results.json();
        return setOwner(data_1); 

    });
  }, []);
     
  return (
    <>
      <HeaderLayout />
      <div>
        <h2>Donate to {project.title}!</h2>
        <div className="pledge-card">
          <img src={project.image} />
        </div>
        {/* <h3>Created at: {project.date_created}</h3> */}
        {/* <h3>{`Status: ${project.is_open}`}</h3> */}
        <p>Project created by: {owner.username}</p>
        <h2>Project Description: </h2>
        <h3> {project.description} </h3>

        <h2>Pledges:</h2>
        <ul>
          {project.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                <div>
                {pledgeData.amount} piece/s of Lego donated by {owner.username}...
                <h4>
                  {owner.username} says : "{pledgeData.comment}"
                </h4>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <p>Would you like to donate some Lego? Pledge below to see {project.title} come to life!</p>
      <PledgeFormPage />
    </>

  );
}

export default ProjectPage;