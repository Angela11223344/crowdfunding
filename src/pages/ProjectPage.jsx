//Data
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import HeaderLayout from "../components/Header/HeaderLayout";
//import PledgeForm from "../components/PledgeForm/PledgeForm";
import PledgeFormPage from "../pages/PledgeFormPage";

//Dummy data
//import { oneProject } from "../data";

function ProjectPage() {
  //State
  const [project, setProject] = useState({ pledges: [] });

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
      .then((data) => {
        setProject(data);
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
        <h2>Project Description: </h2>
        <h3> {project.description} </h3>

        <h2>Pledges:</h2>
        <ul>
          {project.pledges.map((pledgeData, key) => {
            return (
              <li key={key}>
                <div>
                {pledgeData.amount} from {pledgeData.supporter}...{pledgeData.comment}
                </div>
              </li>
            );
          })}
        </ul>
      </div>

        <PledgeFormPage />
    </>

  );
}

export default ProjectPage;