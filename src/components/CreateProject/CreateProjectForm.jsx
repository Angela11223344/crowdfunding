import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProjectForm() {
    const [createProjectForm, setCreateProjectForm] = useState({
        "title": null,
        "decription": null,
        "goal": null,
        "image": null,
        });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id,value } = event.target;
        setCreateProjectForm((prevUser) => ({
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
                body: JSON.stringify(createAccountForm),
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
            <label htmlFor="title">Title:</label>
            <input
                type="text"
                id="title"
                placeholder="Enter title"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                placeholder="Enter your project description here..."
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="goal">Goal:</label>
            <input
                type="text"
                id="goal"
                placeholder="How many pieces of lego do you need?"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="image">Image:</label>
            <input
                type="img"
                id="image"
                placeholder="Add an image here..."
                onChange={handleChange}
            />
            </div>
            <button type="submit">Create Project!</button>
        </form>
        </div>
    );
}

export default CreateAccountForm;
