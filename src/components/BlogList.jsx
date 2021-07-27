import React from 'react'

export default function BlogList({handleDelete, title, blogs}) {

    

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(item=>{
                return(                    
                    <div className="blog-preview" key={item.id}>
                        <h2>{item.title}</h2>
                        <p>Writen by: {item.author.toUpperCase()}</p>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>)
                })}
        </div>
    )
}
