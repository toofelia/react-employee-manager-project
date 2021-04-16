import React, {useState, useContext} from 'react';
import styled from 'styled-components'
import {Redirect} from 'react-router-dom'

import firebaseApp from './../firebase/firebaseConfig'
import AuthContext from './../auth/AuthContext'
import FormInput from './../components/forms/FormInput'
import Button from './../components/buttons/Button'



const LoginPageStyles = styled.aside `

header{
     text-align:center;
     margin-bottom: 3rem;
 }

max-width: 380px;
margin:6rem auto 0;

h1{
    font-size:2.5rem;
    font-weight: 700;
}

`

    const LoginPage = (props) => {
        const auth = useContext(AuthContext)
        const [email, setEmail]=useState('toofelia@gmail.com')
        const [password, setPassword] = useState('123456')
        const [isValid, setIsValid] = useState(false) 
        
        console.log('render')
        console.log(auth)

    const handleClick = (e)=>{
        //test our auth
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .then(userCredential=>{
           //email and password input
            auth.isUser = true
            setIsValid(true)

       
    })
    .catch(error=>{
        console.log(error.code)
        console.log(error.message)
    })

}

if(isValid) {
   return <Redirect to="/dashboard"/>
    }else{
       return ( 
        <LoginPageStyles>
            <header><h1>Login Page</h1></header>
            <FormInput type="email" label="email" onChange={(e)=> setEmail(e.target.value.trim())}/> 
            <FormInput type="password" label="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
            <Button label="login" uiStyles="login" onClick={handleClick}/>
        </LoginPageStyles>
        );
    }
}
 
export default LoginPage;


        /** 
        useState(init){
            let email = init
            (val)=>{
                email = val
            }
            return [email, fn]
        }
        */
                



      
        
 /*        return (
            <LoginPageStyles>
                <header><h1>Login Page</h1></header>
                <FormInput type="text" label="email" onChange={(e)=> setEmail(e.target.value.trim())}/>
                <FormInput type="text" label="password" onChange={(e)=> setPassword(e.target.value.trim())}/>
                <Button label="Login" uiStyle="login" onClick={handleClick} />
            </LoginPageStyles>
    );
} */





/* 
fu App() {
   const  data = {}
}

fu LoginPage(props) {
    data
}


fu HomePage(props) {
    const data = {}
}
 */


