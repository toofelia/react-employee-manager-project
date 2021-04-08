import React from 'react';
import {Router} from 'react-router'

const AuthContext = React.createContext()



const AuthProvider = (props)=>{
   return (
       <AuthContext.Provider value={{role:'admin', uid:null, isUser:false}}>

           {props.children}
       </AuthContext.Provider>
   )

}



export {AuthProvider}

export default AuthContext

