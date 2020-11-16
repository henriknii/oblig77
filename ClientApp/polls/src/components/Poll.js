
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


const Poll = ({location}) => {
  const [poll, setPoll] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  //USER
  let user = location.state.user.user;

  const handleVote = async (id) => {
      const res  = await  axios.put(`http://localhost:5000/api/v1/polls/5fb05452d914fc0e309e03db`,{$push:{data}});
      console.log("res:" + res);

  }


  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios(`http://localhost:5000/api/v1/polls/${id}`);
        setPoll(result.data);
        console.log(result);
        console.log(user);
      } catch (error) {
        alert("this poll does not exist");
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
    handleVote()
  }, []);


  const renderPoll = () => {
    if (isLoading) {
      return <p>Loading poll data...</p>;
    }

    return (
      <div className="w-100 mx-auto text-align-center">
        <h3>{poll[0].title}</h3>

        {poll[0].items.map(function(item, i){
            return <Item poll={poll} setPoll={setPoll} item={item}></Item>
          })
        }
      </div>
    );
  };



  return renderPoll();
};

const Item = ({poll,setPoll,item,handleVote}) =>{
  const [answered,setAnswered] = useState(false)

  const vote = (e,type)=>{
    if(answered==true){
      alert("Du kan ikke stemme om igjen")
      return;
    }

    if(type=="yay"){
      e.target.style.backgroundColor="green";
      setAnswered(true)
    }
    if(type=="nay"){
      e.target.style.backgroundColor="red";
      setAnswered(true)
    }
   
  }

  return(
    <div class="card" style={{margin:"1%"}}>
        <h3>{item.name}</h3><p>{item.description}</p><button onClick={(e) => vote(e,"yay",item.name)} class="button" style={{width:"20%"}}>YAY</button>
        <p>or</p><button  style={{width:"20%"}} class="button">NAY</button>
    </div>
  );
}


export default Poll;