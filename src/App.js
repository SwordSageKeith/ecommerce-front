import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import SearchBar from './components/SearchBar/SearchBar.js';
import ItemGrid from './components/ItemGrid/ItemGrid.js';

function App() {
  return (
    <div>
      <Header/>
      <SearchBar/>
      <ItemGrid/>
    </div>
  );
}

export default App;
