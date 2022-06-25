import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header';
import SideBar from './SideBar';

function App() {
  return (
    <div className="app">
      {/* <h1>hi</h1> */}
      <Header />

      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widget  */}
      </div>

    </div>
  );
}

export default App;
