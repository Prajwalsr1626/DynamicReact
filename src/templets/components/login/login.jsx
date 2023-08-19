import React from "react";
import './login.css'
export default function Login() {
  function login(){

  }
    
  return(
   <section className="container" >
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        
        <input type="password" placeholder="Password" />
        
        <input type="submit" value="Login" />
      </form>
      <p className="error-message">Incorrect username or password</p>
      <p>Don't have an account? Sign up</p>
    </div>
    
  </section>)
}
