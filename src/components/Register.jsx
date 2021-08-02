import {useState} from 'react'
import { useHistory } from 'react-router-dom';

export default function Register() {

    const [formData, setFormData] = useState({email: "", password: ""});

    const{email,password}=formData;

    const history=useHistory();

    const submitHandler = async (e) => {
        e.preventDefault();
        const response=await fetch("http://localhost:8001/register",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(formData),
        })
        if(!response.ok){
            alert("Something went wrong, please review your password's length"); 
            return;
        }
        history.push("/");
    }

    

    return (
        <div className="register-container">
            <h2>Register a new user</h2>
            <form onSubmit={submitHandler} className="registerForm">
                <label>Email:</label>
                <input type="email" required value={email} onChange={(e)=>setFormData({...formData, email: e.target.value})}/>
                <label>Password:</label>
                <input type="text" required value={password} onChange={(e)=>setFormData({...formData, password: e.target.value})}/>
                <input type="submit" value="Register" className="submitBtn"/>
            </form>
        </div>
    )
}
