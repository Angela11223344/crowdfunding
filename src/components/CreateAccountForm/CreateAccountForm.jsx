import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function CreateAccountForm() {
    const [createAccountForm, setCreateAccountForm] = useState({
        "username": null,
        "first_name": null,
        "last_name": null,
        "email": null,
        "password": null
        });

    const navigate = useNavigate();

    const { id } = useParams();

    const handleChange = (event) => {
        const { id,value } = event.target;
        setCreateAccountForm((prevUser) => ({
        ...prevUser,
        [id]: value,
        }));
    };

    const authToken = window.localStorage.getItem("token")

    const PostData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}users/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(pledges),
            }
        );
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (authToken) {
            const postUser = await PostData();
            navigate("/");
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                placeholder="Enter username"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="first_name">First Name:</label>
            <input
                type="text"
                id="first_name"
                placeholder="Enter your first name"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="last_name">Last Name:</label>
            <input
                type="text"
                id="last_name"
                placeholder="Enter your last name"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="text"
                id="email"
                placeholder="Enter your email address"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label>
            <input
                type="text"
                id="password"
                placeholder="Enter your password"
                onChange={handleChange}
            />
            </div>
            <button type="submit">Create Account!</button>
        </form>
        </div>
    );
}

export default CreateAccountForm;
