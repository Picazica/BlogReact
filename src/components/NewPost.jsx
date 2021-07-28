import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router';

export default function NewPost() {

    const[title,setTitle]=useState("");
    const[body,setBody]=useState("");
    const[author,setAuthor]=useState("");
    const[isLoading, setIsLoading]=useState(false);
    const history=useHistory();

    const submitHandler = async (e) =>{
        e.preventDefault();
        const blog={title, body, author};
        setIsLoading(true);
        await fetch("http://localhost:8000/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        })
        setIsLoading(false);
        history.push("/");
    }

    return (
        <div className="create">
            <h2>Add a new post</h2>
            <form onSubmit={submitHandler}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Blog body:</label>
               <textarea required value={body} onChange={(e)=>setBody(e.target.value)}></textarea>
                <label>Author:</label>
                <select required value={author} onChange={(e)=>setAuthor(e.target.value)}>
                    <option value=""></option>
                    <option value="Vítor">Vítor</option>
                    <option value="Ana">Ana</option>
                </select>
                {!isLoading && <button>Create blog</button>}
                {isLoading && <button>Adding blog...</button>}
            </form>
        </div>
    )
}
