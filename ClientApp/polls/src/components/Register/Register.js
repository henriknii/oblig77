import React, { useEffect, useState} from "react"
import axios from 'axios'
import {useHistory} from 'react-router-dom';

const Register = () => {
    let history  = useHistory();

    const [email,setEmail] = useState()
    const [password,settPassword] = useState()
    const [user,setUser] = useState({email:"",password:""})


    async function register() {  
        const res = await axios.post('http://localhost:5000/api/v1/user/',user)
        console.log(res.status)
     }

     
    const handleSubmit = (event)  => {
        event.preventDefault()
        setUser({
            email: email,
            password: password
        })

        if(email !=="" && password !==""){
            register();
            alert("du er nå registret trykk OK for å bli sendt til login.")
            history.push("/")
        }
        
    }
    return(
    <div className="col-sm-1 mx-auto">
        <form className=" col-sm-1 needs-validation" onSubmit={handleSubmit}>
        <h1>Registrer</h1>
            <div className="form-row">
                <label htmlFor="email">Epost</label>
                <input id="email" className="form-control" type="text" onChange={e => setEmail(e.target.value)} placeholder="example@example.no"  required />
            </div>
            <div className="form-row">
                <label htmlFor="password">Passord</label>
                <input id="password" className="form-control" type="password" onChange={e => settPassword(e.target.value)} placeholder="*****" required />
            </div>
            <button className="btn btn-primary"  onClick={handleSubmit} type="submit" >Registrer</button>
        </form>
    </div>
    )
}


export default Register