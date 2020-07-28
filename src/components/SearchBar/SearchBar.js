import React from 'react';
import "./SearchBar.css"

class SearchBar extends React.Component {

  render() {

    return <div className = "search">
      <form>
        <input type = "text" id = "searchinput" placeholder = "Search"></input>
      </form>
    </div>
  }
}

export default SearchBar;