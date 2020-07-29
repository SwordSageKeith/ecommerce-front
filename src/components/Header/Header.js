import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'

class Header extends React.Component{

  render() {
    return <header>
    <h1><Link to = "/">Temp name</Link></h1>
    <h3><Link to = "test">Something</Link></h3>
    <h3><Link to = "profile">Profile</Link></h3>
    <h3><Link to = "login">Login</Link></h3>
  </header>;
  }
}

export default Header;