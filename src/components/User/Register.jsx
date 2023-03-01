import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderLayout from "../Header/HeaderLayout";
function Register(props){
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [registerFormData, setRegisterFormData] = useState(
    {
      "username":'',
      "first_name":'',
      "last_name":'',
      "email":'',
      "password":''
    }
  );
  const inputHandler = (event) => {
    setRegisterFormData({
      ...registerFormData,
      [event.target.name]:event.target.value
    })
    };
  const postData = async () => {
    const response = await fetch(
    `${import.meta.env.VITE_API_URL}users/`,
    {
      method: "post",
      headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerFormData),
    }
    );
    return response.json();
  };
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    const formData = new FormData();
    formData.append('username',registerFormData.username);
    formData.append('first_name',registerFormData.first_name);
    formData.append('last_name',registerFormData.last_name);
    formData.append('email',registerFormData.email);
    formData.append('password',registerFormData.password);
    console.log(formData)
    event.preventDefault();
    if (username === '' || email === '' || password === '' ||
    first_name === '' || last_name=== '')
    {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
      const postUser = await postData();
      navigate("/login");
      }
  };
  const successMessage = () => {
    return (
      <div
      className="success"
      style={{
        display: submitted ? '' : 'none',
      }}>
      <h3>User successfully registered!!</h3>
      </div>
    );
    };
   // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
      className="error"
      style={{
        display: error ? '' : 'none',
      }}>
      <h1>Please enter all the fields</h1>
      </div>
    );
    };
  return (
      <><HeaderLayout />
      <div className="container">
          <div>
              <h2 className="project-page-title">New User Registration</h2>
          </div>
          <div className="messages">
              {errorMessage()}
              {successMessage()}
          </div>
          <form onSubmit={handleSubmit}>
              <div>
                  <label htmlFor="username">Username: </label>
                  <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      onChange={inputHandler}
                      value={registerFormData.username} />
              </div>
              <div>
                  <label htmlFor="first_name">First name: </label>
                  <input
                      type="text"
                      id="first_name"
                      name="first_name"
                      placeholder="First name"
                      onChange={inputHandler}
                      value={registerFormData.first_name} />
              </div>
              <div>
                  <label htmlFor="last_name">Last name: </label>
                  <input
                      type="text"
                      id="last_name"
                      name="last_name"
                      placeholder="Last name"
                      onChange={inputHandler}
                      value={registerFormData.last_name} />
              </div>
              <div>
                  <label htmlFor="email">Email: </label>
                  <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email address"
                      onChange={inputHandler}
                      value={registerFormData.email} />
              </div>
              <div>
                  <label htmlFor="password">Password: </label>
                  <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={inputHandler}
                      value={registerFormData.password} />
              </div>
              <button type="submit">SignUp</button>
          </form>
      </div></>
  );
}
export default Register;