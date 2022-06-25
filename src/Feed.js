import React, { useEffect, useState } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Post from './Post';
import db from './firebase';

const Feed = () => {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))
            )))
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        // setPosts()
        db.collection("posts").add({
            name: 'Aditya SHarma',
            description: 'This is a firestore vala test',
            message: input,
        })
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form action="">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>

                <div className="feed__inputOptions">
                    <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A44E" />
                    <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />

                </div>
            </div>

            {posts.map((post) => (
                <Post />
            ))}

            <Post name="Aditya Sharma" description="test" message="WOW this works somehow" />
        </div>
    )
}

export default Feed