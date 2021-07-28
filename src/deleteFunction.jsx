

export const handleClick = async(id) =>{

    await fetch("http://localhost:8000/blogs/" + id, {
        method: "DELETE",
    });
}