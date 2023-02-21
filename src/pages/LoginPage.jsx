import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function LoginPage() {
    //State
    const [login, setLogin] = useState();

    //Effects
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}users/`)
        .then((results) => {
        return results.json();
    })
        .then((data) => {
        setLogin(data);
    });
  }, []);

    return (
        <div>
        <h1>This is the login page</h1>
        </div>
    );
}

export default LoginPage;