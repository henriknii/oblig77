import React from 'react'
import {Link} from "react-router-dom";


const Join  = () => {
    return(
    <div className="col-xs-1 w-75 mx-auto text-center ">
            <h4 className="mb-3">Skriv inn valg-id</h4>
            <form className="col-xs-1 w-75 mx-auto"> 
                <input type="text"  className="mb-3 p-1" placeholder="HK8739"></input>
                <button className="btn btn-primary w-75">Bli med</button>
            </form>
            <h4 className="mb-3">Lag avstemming</h4>
            <Link to ="/Create-poll">
            <button className="w-50 btn-outline-pink">Start</button>
            </Link>
        </div>
    )

}




export default Join