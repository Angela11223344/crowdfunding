import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import HeaderLayout from "../Header/HeaderLayout";

function ProjectForm(){
    const [projects, setProjects] = useState({
        // from JSON Raw Body in Deployed (default values)
        "title": "",
        "description": "",
        "goal": null,
        "image": "",
        "is_open": "true",
        "date_created":null
    });
    const { id } = useParams();
    // copies the original data, replaces the old data for each id/value pair to what is input in the form (changes state). this will be submitted to API below
    const handleChange = (event) => {
        const { id, value } = event.target;
        setProjects((prevProjects) => ({
        ...prevProjects,
        [id]: value,
        }));
    };
    const navigate = useNavigate();
    const authToken = window.localStorage.getItem("token");
    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}projects/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${authToken}`,
                },
                body: JSON.stringify(projects),
            }
        );
    };
// if authtoken exists, post the data on submit, wait for the response and nav back to home page
    const handleSubmit = async(event) => {
    event.preventDefault();
    if (authToken) {
        const postProject = await postData();
        navigate("/");
    }
};
    return(
        <>
            <HeaderLayout />
            <p className="title">Do you have an idea for a really cool project? We want to see it! Create One Here...</p>
                <div className="container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Title:</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="Enter title"
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            placeholder="Enter description"
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="goal">Goal:</label>
                        <input
                            type="number"
                            id="goal"
                            placeholder="How many Lego bricks will you need?"
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="image">Image:</label>
                        <input
                            type="text"
                            id="image"
                            placeholder="Enter Image address"
                            onChange={handleChange} />
                    </div>
                    <button type="submit">Create Project</button>
                </form>
            </div>
        </>
    );
}
export default ProjectForm;