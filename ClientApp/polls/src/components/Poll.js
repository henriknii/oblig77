
import React, { useEffect, useState } from "react";
import { useParams ,useHistory} from "react-router-dom";
import axios from "axios";


const Poll = ({location}) => {
  const [poll, setPoll] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  let history = useHistory();

  //USER
  let user = location.state.user.user[0].email;

  const handleYesVote = async (pollId) => {
    if(pollId){
      const res  = await  axios.put(`http://localhost:5000/api/v1/polls/${pollId}`,{$push:{answeredYesBy:user}});
    }
  }

  const handleNoVote = async (pollId) => {
    if(pollId){
      const res  = await  axios.put(`http://localhost:5000/api/v1/polls/${pollId}`,{$push:{answeredNoBy:user}});
    }
  }




  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(`http://localhost:5000/api/v1/polls/${id}`);
        if(result.data.length >= 1){
        setPoll(result.data);
        }
        else{
          alert("pollen finnes ikke, du blir nå tatt tilbake til login.")
          history.push("/")
        }
      } catch (error) {
        alert("this poll does not exist");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  },[poll])

  const renderPoll = () => {
    if (isLoading) {
      return <p>Loading poll data...</p>;
    }

    return (
      <div className="w-100 mx-auto text-align-center">
        <h1>{poll[0].title}</h1>
        <p>{poll[0].question} ?</p>
        <p>{poll[0]._id}</p>
        <p>Ja :  {poll[0].answeredYesBy.length}</p>
        <p>Nei : {poll[0].answeredNoBy.length}</p>



        <button onClick={() => { handleYesVote(poll[0]._id)}} className="btn btn-primary">Ja</button>
        <button onClick={() => {handleNoVote(poll[0]._id)}}className="btn btn-danger">Nei</button>

      </div>
    );
  };



  return renderPoll();
};



export default Poll;