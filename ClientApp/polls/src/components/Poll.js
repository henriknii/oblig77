
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Poll = () => {
  const [poll, setPoll] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(`http://localhost:5000/api/v1/polls/${id}`);
        setPoll(result.data);
        console.log(result);
      } catch (error) {
        alert("this poll does not exist");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  console.log(poll)

  const renderPoll = () => {
    if (isLoading) {
      return <p>Loading poll data...</p>;
    }

    return (
      <div className="w-100 mx-auto text-align-center">
        <h3>{poll[0].title}</h3>
      </div>
    );
  };

  return renderPoll();
};

export default Poll;