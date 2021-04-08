import React from 'react';
import styled from 'styled-components' 

const FormInputStyles = styled.div `
color: #3a464c ; 
box-shadow: 0 4 px 4;
color:#3a464c;
box-shadow: 0 4px 4px -2px rgba(0,0,0,0.12);
margin-bottom:1.5rem;
width:100%;
label {
font-size: 13px;
color:#848d92;
}

input {
width: 100%;
font-size: 1rem;
background-color:inherit;
border:none;
padding: 0.25rem;
outline-color:none;
}

input:focus{
outline:none;
box-shadow: 0 4px 4px -2px rgba(0,0,0,0.2);
}

`

const FormInput = (props) => {
    return (
        <FormInputStyles  {...props}>
              <label htmlFor={props.id}>{props.label}</label>
              <input type={props.type} is={props.id} name={props.name}/>

        </FormInputStyles>



    )
}

export default FormInput;