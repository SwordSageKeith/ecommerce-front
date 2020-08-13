import React from "react";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = (e) => {
    e.preventDefault();
    alert ( "Username: " + this.state.username + "\n password: " + this.state.password);
  }

  render() {
    return (
      <div className="loginPage">
        <h1>Log in with username or email</h1>
        <form className="loginform" onSubmit = {this.handleLogin}>
          <h3 name="error" value={this.state.error}></h3>
          <label for="loginInput">
            <input
              type="text"
              placeholder="email / username"
              id="loginInput"
              value={this.state.username}
              name="username"
              onChange={this.change}
              required
            ></input>
          </label>

          <br />
          <label for="passwordInput">
            <input
              type="password"
              id="passwordInput"
              name="password"
              value={this.state.password}
              onChange={this.change}
              required
            ></input>
          </label>

          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
