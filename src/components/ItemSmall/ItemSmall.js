import React from "react";
import "./ItemSmall.css";
import {Link} from 'react-router-dom';
import quil from "../../pics/quil.jpg";

class ItemSmall extends React.Component {
  render() {
    return (
      <div className="ItemBlock">
        <Link className = "itemLink">
          <h2>Item name</h2>
          <img src = {quil}/>
        </Link>
      </div>
    );
  }
}

export default ItemSmall;
