import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LoggedInUser({username}) {
    // State
    const [loggedInUser, setLoggedInUser] = useState();

    const { id } = useParams();
    
    // Actions & Helpers
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users/${id}`)
        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setLoggedInUser(data);
        });
    }, [username]);

 if (!loggedInUser) {
     return null
 }

    // Normal State
    return (
        <span>{loggedInUser.id}</span>            
    );
}

export default LoggedInUser;