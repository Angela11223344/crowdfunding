//Data
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterLayout from "../components/Footer/FooterLayout";
import HeaderLayout from "../components/Header/HeaderLayout";


function ViewAccountPage() {
  //State
  const [userData, setUserData] = useState([]);

  //Hooks
  const { id } = useParams();

  //Effects
  useEffect(() => {
  //   async function getAccountDetails() {
  //     try {
  //       const response = await fetch(
  //         `${import.meta.env.VITE_API_URL}users/${id}`,
  //       { 
  //         method: "GET",
  //       });
  //       const body = await response.json();
  //       setUser(body);
  //     } catch (err) {
  //       console.log(err);
  //   }
  // }
  //   getAccountDetails();

    fetch(`${import.meta.env.VITE_API_URL}users/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUserData(data);
      })

  }, [id]);

     
  return (
    <>
        <HeaderLayout />
        <div>
          {}
            <p>MY ACCOUNT DETAILS</p>
            <p>Username: {userData.id}</p>
            <p>First Name: {userData.first_name}</p>
            <p>Last Name: {userData.last_name}</p>
            <p>Email address: {userData.email}</p> 
        </div>

        <FooterLayout />
    </>

  );
}

export default ViewAccountPage;