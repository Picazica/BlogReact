import {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Link} from "react-router-dom"


export default function Login({setToken}) {

    const[formData,setFormData]=useState({email: "", password: ""});
    const history=useHistory();
    const{email,password}=formData;

    const submitHandler = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8001/login",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        if(!response.ok){
            alert("Review if Email or password are correct...")
            return;
        }
        const data = await response.json();
        setToken(data.accessToken);
        history.push("/");
    }

    return (
        <div className="form-container">
            <h2>Login page</h2>
            <form onSubmit={submitHandler} className="loginForm">
                <label>Email:</label>
                <input type="text" required value={email} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
                <label>Password:</label>
                <input type="text" required value={password} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
                <input type="submit" value="Login" className="submitBtn"/>
            </form>
            <div className="form-create">
                <h3 className="h3-form">Don't have an account yet?</h3>
                <Link to="/register">Create account</Link>
            </div>
        </div>
    )
}
