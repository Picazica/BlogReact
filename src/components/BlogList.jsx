import React from 'react'
import {Link} from "react-router-dom"
import {handleClick} from "../deleteFunction";


export default function BlogList({handleDelete, title, blogs}) {

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(item=>{
                return(
                    <div className="blog-preview" key={item.id}>
                    <Link to={`/blogs/${item.id}`} style={{ textDecoration: 'none' }}>                    
                        <h2>{item.title}</h2>
                        <p>Writen by: {item.author.toUpperCase()}</p>
                    </Link>
                    <button onClick={()=>{
                        handleClick(item.id);
                        window.location.reload(false);
                        }}>Delete</button>
                    </div>
                    )
                })}
        </div>
    )
}
