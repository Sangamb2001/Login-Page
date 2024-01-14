import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
<div className='loginsignup-container'>
            <h1>Signup</h1>
            <div className='login-signup-fields'>
            <form action="POST">
                <input className="login-signup-fields input" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input  className="login-signup-fields input" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input className=".loginsignup-container button" type="submit" onClick={submit} />

            </form>
           </div>
            <br />
            <p>OR</p>
            <br />

            <Link className="signup" to="/signup">Login</Link>
        </div>
        </div> 
    )
}

export default Login

{/* <div className="login">
<div className='loginsignup-container'>
            <h1>Login</h1>
            <div className='login-signup-fields'>
            <form action="POST">
                <input className="login-signup-fields input" type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input  className="login-signup-fields input" type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input className=".loginsignup-container button" type="submit" onClick={submit} />

            </form>
           </div>
            <br />
            <p>OR</p>
            <br />

            <Link className="signup" to="/signup">Signup</Link>
        </div>
        </div> */}