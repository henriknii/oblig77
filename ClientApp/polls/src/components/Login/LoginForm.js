import axios from 'axios';
import React,{useState} from 'react';
import styled from 'styled-components';
import {Route,useHistory} from 'react-router-dom'
import Poll from '../Poll';

const Form = styled.form`
    display:flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
`

export const Input = styled.input`
    margin-bottom: 30px;
    padding: 5px;
`

const Button = styled.button`
    width: 75%;
    padding: 7px 10px;
    background: #007bff;
    margin: 0 auto;
    border-radius:5px;
    border-width:1px;
    color: white;
`

const LoginForm = () => {

    const [password,setPassword] = useState()
    const [email,setEmail] = useState()

    let history = useHistory()

 const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    const result = await axios (`http://localhost:5000/api/v1/user/${email};${password}`)
    console.log(`http://localhost:5000/api/v1/user/${email};${password}`)
    console.log(result.data.length)

    if(result.data.length >= 1){
        history.push("/join")
    }
    else{
        alert("feil brukernavn eller pasord")
    }
}
catch(error){
    alert("something something went funky")
}
    
 }


    return(
        <div>
        <h4 className="mb-3">Login</h4>
        <Form onSubmit={handleSubmit} > 
            <Input type="text"  onChange={e => setEmail(e.target.value)}placeholder="epost"></Input>
            <Input type="password" onChange={e => setPassword(e.target.value)} className="mb-3 p-1" placeholder="passord"></Input>
            <Button class="btn btn-primary">Login</Button>
        </Form>
        </div>
    )
}




export default LoginForm