import React, {useState} from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'


const Join  = () => {

    

    const [poll, setPoll] = useState({});
    const [inputId,setInputId] = useState("");


    const handleSubmit = event => {
        event.preventDefault();
    }
    const handleJoinPoll = async () => {

        try{
            const result = await axios(`http://localhost:5000/api/v1/polls/${inputId}`);
    
            setPoll(result);
            console.log(result)
            
            console.log(poll.data)
            }
            catch(error){
                alert("this poll does not exist")
            }
    }



    return(
    <div className="col-xs-1 w-75 mx-auto text-center ">
            <h4 className="mb-3">Skriv inn valg-id</h4>
            <form onSubmit={handleSubmit} className="col-xs-1 w-75 mx-auto"> 
                <input type="text" value={inputId} onChange={e => setInputId(e.target.value)} className="mb-3 p-1" placeholder="HK8739" required></input>
                <button className="btn btn-primary w-75" onClick={handleJoinPoll}>Bli med</button>
            </form>
            <h4 className="mb-3">Lag avstemming</h4>
            <Link to ="/Create-poll">
            <button className="w-50 btn-outline-pink">Start</button>
            </Link>
        </div>
    )

}




export default Join