import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { projectAuth } from './firebaseConfig';
import { logout } from './features/userSlice';


const Header = () => {

    const dispatch = useDispatch();

    const logOutofApp = () => {
        dispatch(logout());
        projectAuth.signOut();
    };

    return (
        <div className='header'>
            {/* <p>This is the header</p> */}

            <div className="header__left">
                <img src="" alt="" />

                <div className="header__search">
                    {/* <h1>💡</h1> */}
                    <img src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-on-transparent-Background-PNG-.png" alt='thinkedin-logo' className="logo" />
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption
                    avatar="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png"
                    title="Me"
                    onClick={logOutofApp}
                />
            </div>
        </div>
    )
}

export default Header