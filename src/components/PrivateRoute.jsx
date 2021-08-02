import React from 'react'
import {Route, Redirect} from "react-router-dom"

export default function PrivateRoute({component: Component, token, ...rest}) {
    return (
        <Route {...rest} render={
            props=>{
                !token && alert("You need to be logged in");
                return token ? (<Component {...props}/>) :(<Redirect to="/login"/>);   
            }
        }>
        </Route>
    )
}
