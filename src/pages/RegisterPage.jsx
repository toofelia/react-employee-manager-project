import React from 'react';
import styled from 'styled-components' 

import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'

const RegisterPageStyles = styled.aside`
 
 width: 480px;
 margin: 6rem auto 0;
 
 header{
     text-align:center;
     margin-bottom: 3rem;
 }

 h1{
     font-size:2.5rem;
     font-weight: 700;
 } 

 .create-account {
     margin-top: 3rem;
 }
`

const RegisterPage = (props) => {
    return ( 
       <RegisterPageStyles>
    <header>
        <h1>Unlimited Free Trial Sign Up</h1>
        <p>no credit card required</p>
    
    
    </header>
    <FormInput label="name on the account" type="text"/>
    <FormInput label="valid email address" type="email"/>
    <FormInput label="password (min 6 characters)" type="text"/>
    <Button className="create-account"  uiStyles="signup"   label="create a free account"/>
   
    </RegisterPageStyles>
);
}

export default RegisterPage;

