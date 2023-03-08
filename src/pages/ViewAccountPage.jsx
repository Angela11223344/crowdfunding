//Data
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FooterLayout from "../components/Footer/FooterLayout";
import HeaderLayout from "../components/Header/HeaderLayout";


function ViewAccountPage() {
  //State
  const [user, setUser] = useState([]);

  //Hooks
  const { id } = useParams();

  //Effects
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}users/${id}`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setUser(data);
      });
    }, []);
     
  return (
    <>
        <HeaderLayout />
        <div>
          {}
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

export default ViewAccountPage;