import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';
import SideBar from './SideBar';
import { projectAuth } from './firebaseConfig';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    projectAuth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          }))
      }

      else {
        // user is logged out
        dispatch(logout());
      }
    });
  });

  return (
    <div className="app">
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
