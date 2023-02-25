//Data
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PledgePage() {
  //State
  const [pledge,setPledge] = useState( );

  //Hooks
  const { id } = useParams();

  //Effects
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}pledges/${id}`)
    .then((results) => {
      return results.json();
    })
    .then((data) => {
      setPledge(data);
    });
  }, []);

    return (
      <div>
        <h2>Pledge: </h2>
        <h3>Created at: </h3>
        <h3>Amount: </h3>
        <h3>Comment: </h3>
      </div>
    );
  }
  
  export default PledgePage;

