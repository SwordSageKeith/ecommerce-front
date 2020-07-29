import React from "react";
import "./Login.css";

class Login extends React.Component {

  render () {

    return <div className = "loginPage">
      <h1>Log in with username or email</h1>
      <form className = "loginform">
        <label for = "loginInput"></label>
        <input type = "text" placeholder = "email / username" id = "loginInput"></input>
        <br/>
        <label for = "passwordInput"></label>
        <input type = "password" id = "passwordInput"></input> 
      </form>
    </div>
  }
}

export default Login;