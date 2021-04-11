import React from 'react';
import styled from 'styled-components'
import Logo from './../components/icons/Logo'
import {Link} from 'react-router-dom'



const HomePageStyles = styled.header `
text-align:center;
margin:6rem auto 0;

 svg{
    width: 80px;
}

h1{
    font-size:2.25rem;
}

p{
    color:#767484;
}

ul {
     display: flex;
     justify-content:center;
     align-items: center;
     padding: 1rem;
     height: 64px;
 }

 li {
     margin: 0 1rem; 
     border: 1px solid #ff5100;
     padding-top: 0.5rem;
     padding-bottom: 0.5rem;
     padding-left: 1rem;
     padding-right: 1rem;
     border-radius: 5px;

 }

a {
  text-decoration:none;
  color:  #F25E28;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
}

a:hover {
    color: white;
}

li:hover {
background-color: #F25E28; 

}

`

const HomePage = (props) => {
    return ( 
    <HomePageStyles>
        <Logo/>
        <h1>Employee Manager</h1>
        <p>focus on people and we'll focus on the paperwork</p>
        <ul>
              <li><Link to="/register">register</Link></li>
              <li><Link to="/login">login</Link></li>
        </ul>
    </HomePageStyles>
);
}

export default HomePage;
