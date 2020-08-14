import React from "react";
import "./Login.css";
import ApiService from '../../services/ApiService';

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
    ApiService.test()
    .then(text => {
      alert (text);
    });
  }

  render() {
    return (
      <div className="loginPage">
        <h1>Log in with username or email</h1>
        <form className="loginform" onSubmit = {this.handleLogin}>
          <h3 name="error" value={this.state.error}></h3>
          <label>
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
          <label>
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
