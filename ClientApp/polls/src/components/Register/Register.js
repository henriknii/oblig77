import React, { useEffect, useState} from "react"
import axios from 'axios'

const Register = () => {

    const [email,setEmail] = useState()
    const [password,settPassword] = useState()
    const [user,setUser] = useState({email:"",password:""})

    const handleSubmit = ()  => {
        setUser({
            email: email,
            password: password
        })
    }

    useEffect(() => {
        async function register() {  
            await axios.post('http://localhost:5000/api/v1/user/',user).then(res => {
            console.log(res);
            console.log(res.data);
        })}

        if(user.password !== "" && user.email !=="")
        register()
    },[user])
    return(
    <div className="col-sm-1 mx-auto">
        <form className=" col-sm-1 needs-validation" onSubmit={handleSubmit} noValidate>
        <h1>Registrer</h1>
            <div className="form-row">
                <label htmlFor="email">Epost</label>
                <input id="email" className="form-control" type="text" onChange={e => setEmail(e.target.value)} placeholder="example@example.no" pattern='[^\S+@\S+$]'/>
            </div>
            <div className="form-row">
                <label htmlFor="password">Passord</label>
                <input id="password" className="form-control" type="password" onChange={e => settPassword(e.target.value)} placeholder="*****" pattern='[^\S+@\S+$]'/>
            </div>
            <button className="btn btn-primary" type="submit" >Registrer</button>
        </form>
    </div>
    )
}


export default Register