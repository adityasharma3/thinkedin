import { Avatar } from '@material-ui/core'
import './Sidebar.css'
import React from 'react'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Aditya Sharma</h2>
                <h4>aditya.sharma9301@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className='sidebar__statNumber'>99</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on Posts</p>
                    <p className="sidebar_statNumber">102</p>
                </div>
            </div>

            <div className="sidebar__bit">
                <p>Recent</p>
            </div>
        </div>
    )
}

export default SideBar