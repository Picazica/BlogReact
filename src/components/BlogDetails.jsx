import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch';
import {handleClick} from "../deleteFunction";

export default function BlogDetails() {

    const{id}=useParams();
    const {data: blog, isLoading, error}=useFetch("http://localhost:8000/blogs/" + id)

    const history= useHistory();

   

    return (
        <div className="blog-details">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div> }
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author.toUpperCase()}</p>
                    <div>{blog.body}</div>
                    <button onClick={
                        ()=>{
                            handleClick(id);
                            history.push("/");
                        }
                        }>Delete</button>
                </article>
            )}
        </div>
    )
}
