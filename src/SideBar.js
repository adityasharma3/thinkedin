import { Avatar } from '@material-ui/core'
import './Sidebar.css'
import React from 'react'

const SideBar = () => {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className='sidebar__has'>#</span>
                <p>{topic}</p>
            </div>)
    };

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1486848538113-ce1a4923fbc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1949&q=80" alt="banner" />
                <Avatar className="sidebar__avatar" />
                <h2>Aditya Sharma</h2>
                <h4>aditya.sharma9301@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className='sidebar_statNumber'>99</p>
                </div>

                <div className="sidebar__stat">
                    <p>Views on Posts</p>
                    <p className="sidebar_statNumber">102</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('coding')}
                {recentItem('node js')}
                {recentItem('dev tools')}
            </div>
        </div>
    )
}

export default SideBar