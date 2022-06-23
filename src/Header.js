import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Header = () => {
    return (
        <div className='header'>
            {/* <p>This is the header</p> */}

            <div className="header__left">
                <img src="" alt="" />

                <div className="header__search">
                    {/* <h1>💡</h1> */}
                    <img src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1655975710~hmac=cc0d66de458825338967e89c1a81d826" alt='thinkedin-logo' className="logo" />
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header__right">
                <HeaderOption title='Home' Icon={HomeIcon} />
                <HeaderOption title='My Network' Icon={SupervisorAccountIcon} />
                <HeaderOption title='Messaging' Icon={ChatIcon} />
                <HeaderOption title='Notifications' Icon={NotificationsIcon} />
                <HeaderOption avatar="https://pickaface.net/gallery/avatar/unr_random_160817_0304_2mvqp69.png" title="Me" />
            </div>
        </div>
    )
}

export default Header