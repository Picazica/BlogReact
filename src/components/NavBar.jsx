import React from 'react'
import {Link} from "react-router-dom"

export default function NavBar() {
    return (
        <div className="navbar">
            <h1>Vítor's Blog</h1>
            <div className="links">
                <Link to="/">
                    Home
                </Link>
                <Link to="/newBlog">
                    New Blog
                </Link>
            </div>
        </div>
    )
}
