import React, { useEffect, useState } from 'react';
import './App.css';
import MenuBar from './Components/appbar';
import BasicGrid from './Components/layout';
import MovieCard from './Components/Moviecard';
import SearchBar from './Components/searchbar';




function App() {
  
  
  return (
    <box>
    <MenuBar/>
    <SearchBar/>
    <BasicGrid/>
   
    </box>
  );
}

export default App;
