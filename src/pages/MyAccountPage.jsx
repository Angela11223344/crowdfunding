//Data
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


import FooterLayout from "../components/Footer/FooterLayout";
import HeaderLayout from "../components/Header/HeaderLayout";


function MyAccountPage(){
  //State
  const [user, setUser] = useState([]);

  //Hooks
  const { id } = useParams();

  //Effects
  // useEffect(() => {
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

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/${id}`);
        const data = await response.json();
        setUser(data);
        console.log(data)
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser();
  }, []);
  
     
  return (
    <>
        <HeaderLayout />
        <div>
            <p>MY ACCOUNT DETAILS</p>
            <p>Username: {user.username}</p>
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email address: {user.email}</p> 
        </div>

        <FooterLayout />
    </>

  );
}

export default MyAccountPage;
