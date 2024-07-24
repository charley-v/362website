import React from 'react'
import './CSS/Loginsignup.css'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Loginsignup(props){
  const [loginForm, setloginForm] = useState({
    email: "",
    password: ""
  })
  

  const navigate = useNavigate()
  function logInUser(event) {
    event.preventDefault();  
  
    const loginData = {
      email: loginForm.email,
      password: loginForm.password,
    };
  
    console.log("Login Data:", loginData); 
  
    axios.post("http://127.0.0.1:5000/logintoken", loginData)
      .then((response) => {
        console.log(response)
        props.setToken(response.data.access_token)
        alert("Successfully logged in");
        localStorage.setItem('email', loginForm.email);
        localStorage.setItem('token', response.data.access_token);
        navigate('/profile')
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log(error.response.status);
          console.log(error.response.headers);
          if (error.response.status === 401) {
            alert("Invalid Email or Password");
          } else {
            alert("Internal Server Error. Please try again later.");
          }
        }
      });
  
    setloginForm({
      email: "",
      password: ""
    });
  }

function handleChange(event){
  const {value, name} = event.target
  setloginForm(prevNote => ({
    ...prevNote, [name]: value})
  )}

  return (
    <div className='login'>
      <div className="login-box">
    <h2>Login</h2>
    <div className="textbox">
        <input type="text" placeholder='Email'value={loginForm.email} name='email' onChange={handleChange}/>
    </div>
    <div className="textbox">
        <input type="password" placeholder='Password' value={loginForm.password} name='password' onChange={handleChange}/>
    </div>
    <div className="remember-me">
        <input type="checkbox" id="remember" name="remember"/>
        <label>Remember Me</label>
    </div>
    <button type="button" className="btn" onClick={logInUser}>Login</button>
        </div>
      <div className="login-link">
            <Link style={{textDecoration: 'None', color:'blue'}} to='/signup'>New Customer?</Link>
        </div>

    </div>
  )
}
export default Loginsignup