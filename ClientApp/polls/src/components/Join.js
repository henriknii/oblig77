import React, {useState,useEffect} from 'react'
import {Link, useHistory} from "react-router-dom";


const Join  = ({location}) => {

    let user = location.state.data.res;
    const [inputId,setInputId] = useState("");

    let history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`Poll/${inputId}`, {user :{user} })
        
    }

    return(
    <div className="col-xs-1 w-75 mx-auto text-center ">
 
            <h4 className="mb-3">Skriv inn valg-id</h4>
            <form onSubmit={handleSubmit} className="col-xs-1 w-75 mx-auto"> 
                <input type="text" value={inputId} onChange={e => setInputId(e.target.value)} className="mb-3 p-1" placeholder="HK8739" required></input>
                    <button className="btn btn-primary w-75">Bli med</button>
            </form>
            <h4 className="mb-3">Lag avstemming</h4>
            <Link to ="/CreatePoll">
            <button className="w-50 btn-outline-pink">Start</button>
            </Link>
        </div>
        
    )

}




export default Join