import React, { Fragment } from 'react'
import {Link} from "react-router-dom"

export default function NavBar({token, setToken}) {
    return (
        <div className="navbar">
            <h1>Welcome to your Blog</h1>
            <div className="links">
                {token ? <Fragment>
                <Link to="/">
                    Home
                </Link>
                <Link to="/newBlog">
                    Create a new post
                </Link>
                <Link to="/" onClick={()=>setToken("")}>
                    Logout
                </Link>
                </Fragment> : <Fragment>
                <Link to="/">
                    Home
                </Link>
                <Link to="/login">
                    Login
                </Link>
                <Link to="/register">
                    Register
                </Link> 
                <Link to="/newBlog">
                    New post    
                </Link>
                </Fragment>}
            </div>
        </div>
    )
}
