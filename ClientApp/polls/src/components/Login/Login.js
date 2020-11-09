import React from "react"
import {Link} from "react-router-dom";




const  Login = () => {

    return (
        
        <div className="col-xs-1 w-75 mx-auto text-center ">
            <h4 className="mb-3">Login</h4>
            <form className="col-xs-1 w-75 mx-auto"> 
                <input type="text"  className="mb-3 p-1" placeholder="epost"></input>
                <input type="password" className="mb-3 p-1" placeholder="passord"></input>
                <button className="btn btn-primary w-75" type="submit" >Login</button>
            </form>
            <h4 className="mb-3">Registrer deg </h4>
            <Link to ="/registrer">
            <button className="btn btn-outline-secondary">Bli med</button>
            </Link>
        </div>
    )
}


export default Login