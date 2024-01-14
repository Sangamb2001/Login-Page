import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './login.css'

function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
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
        </div>
    )
}

export default Login

{/* <div className='loginsignup'>
<div className='loginsignup-container'>
  <h1>Sign Up</h1>
 <div className='login-signup-fields'>
  <input type='text' placeholder='Your Name'></input>
  <input type='email' placeholder='Email Address'></input>
  <input type='password' placeholder='Password'></input>
 </div>
 <button>Continue</button>
 <p className='loginsignup-login'>Already have an account <span>Login here</span></p>
 <div className='login-signup-agree'>
   <input type='checkbox' name='' id=''></input>
   <p>By Continue I agree on terms of Use And Privacy Policy</p>
 </div>
</div> */}
//</div>