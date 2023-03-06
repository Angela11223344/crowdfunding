//Data
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import HeaderLayout from "../components/Header/HeaderLayout";


function ViewAccountPage() {
  //State
  const [owner, setOwner] = useState([]);

  //Hooks
  const { id } = useParams();

  //Effects
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
      .then((results) => {
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
      <HeaderLayout /><div>
       <p>MY ACCOUNT DETAILS</p>
       <p>Username: </p>
       <p>Email address: </p> 
      </div>

    </>

  );
}

export default ViewAccountPage;