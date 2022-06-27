import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">
      {/* <h1>hi</h1> */}
      <Header />

      {!user ? (<Login />) : (

        <div className="app__body">
          <SideBar />
          <Feed />
          {/* Widget  */}
        </div>)
      }

    </div>
  );
}

export default App;
