import React from 'react';
import styled from 'styled-components';

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
    return(
        <div>
        <h4 className="mb-3">Login</h4>
        <Form> 
            <Input type="text"  placeholder="epost"></Input>
            <Input type="password" className="mb-3 p-1" placeholder="passord"></Input>
            <Button class="btn btn-primary">Login</Button>
        </Form>
        </div>
    )
}




export default LoginForm