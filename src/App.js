import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavToggle from './components/navtoggle';
import SideNav from './components/sidenav';
import UserDetails from './components/details';

function App() {
  return (
    <div className="App">
     <NavToggle/>
     <SideNav/>
     <UserDetails/>
    </div>
  );
}

export default App;
