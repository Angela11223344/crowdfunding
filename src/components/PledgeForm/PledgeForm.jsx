import { useState } from "react";

// Imports
import { useNavigate, useParams } from "react-router-dom";

function PledgeForm(pledgeData) {
  // State
  const [pledge, setPledge] = useState(
    pledgeData.map
  );

  // Hooks
  const { id } = useParams();
  const navigate = useNavigate();

  const token = window.localStorage.getItem("token");
  const isUserLoggedin = !(token === null || token === undefined || token === "undefined")

  if (!isUserLoggedin) {
    navigate(`/login/`);
  }

  // Actions and Helpers
  const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((PledgeData) => ({
      ...PledgeData,
      [id]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = window.localStorage.getItem("token")
    console.log("handleSubmit", token)

    // Is user logged in and have they put something in all fields?
    if (token && pledge.amount && pledge.comment) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}pledges/`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Token ${token}`,
            },
            body: JSON.stringify({
              amount: parseInt(pledge.amount),
              anonymous: false,
              comment: pledge.comment,
              project_id: parseInt(id)
            }),
          }
        );
        const data = await response.json();
        console.log(data)

        navigate(`/project/${id}`);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <form>
        <div>
          <label htmlFor="amount">Enter Amount: </label>
          <input
            type="text"
            id="amount"
            placeholder="Enter amount"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="comment">Leave a Comment: </label>
          <input
            type="text"
            id="comment"
            placeholder="Comment"
            onChange={handleChange}
          />
        </div>
        <button className="pledge-btn" type="submit" onClick={handleSubmit}>
          Donate
        </button>
      </form>
    </>
  );
}

export default PledgeForm;