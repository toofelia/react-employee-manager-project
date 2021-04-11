import React, {useState, useContext} from 'react';
import styled from 'styled-components' 
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../auth/AuthContext'
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
        const auth = useContext(AuthContext)
        const [username, setUsername]=useState('')
        const [email, setEmail]=useState('')
        const [password, setPassword] = useState('')
        const [isValid, setIsValid] = useState(false) 


        console.log('render')
        console.log(auth)

        const handleClick = (e)=>{
            
            firebaseApp.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
            // Redirect to login route
            // Use conditional rendering
                auth.isUser = true
                setIsValid(true)
            })
            .catch((error) => {
                console.log(error.code)
                console.log(error.message)
            })
        }
        

if(isValid) {
    return <Redirect to="/login"/>
  }else{ 
     return ( 
       <RegisterPageStyles>
            <header>
                <h1>Unlimited Free Trial Sign Up</h1>
                <p>no credit card required</p>
            </header>
            <FormInput type="text" label="name on the account"  onChange={(e)=> setUsername(e.target.value.trim())}/>
            <FormInput type="email" label="valid email address"   onChange={(e)=> setEmail(e.target.value.trim())}/>
            <FormInput type="password" label="password (min 6 characters)"  onChange={(e)=> setPassword(e.target.value.trim())}/>
            <Button className="create-account"  uiStyles="signup"   label="create a free account" onClick={handleClick}/>
   
     </RegisterPageStyles>
    );
  }
}

export default RegisterPage;

