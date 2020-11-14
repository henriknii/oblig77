import React from "react"
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";




const  Login = () => {

    return (
        
        <div className="col-xs-1 w-75 mx-auto text-center ">
            <LoginForm />
            <h4 className="mb-3">Registrer deg </h4>
            <Link to ="/registrer">
            <button className="btn btn-outline-secondary">Bli med</button>
            </Link>
        </div>
    )
}


export default Login