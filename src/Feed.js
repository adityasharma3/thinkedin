import React, { useEffect, useState } from 'react'
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import Post from './Post';
// import { db, postsRef } from './firebaseConfig';
import { projectFirestore } from './firebaseConfig';
import { serverTimestamp } from '@firebase/firestore';

const Feed = () => {

    const [input, setInput] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const sub = projectFirestore
            .collection('posts')
            .orderBy("timestamp", "asc")
            .onSnapshot((snap) => {

                let documents = [];

                snap.forEach((doc) => {
                    documents.push({
                        ...doc.data(),
                        id: doc.id
                    })
                });

                setPosts(documents);
            });

        return () => sub();

    }, [projectFirestore]);

    const sendPost = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setInput('');

        console.log('posts eeet');

        projectFirestore.collection('posts').add({
            userName: "Aditya Sharma",
            description: 'yo nigz',
            message: input,
            photoUrl: '',
            timestamp: serverTimestamp(),
        })
    };

    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon />

                    <form onSubmit={sendPost}>
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit">Send</button>
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
                <Post
                    key={Math.random()}
                    userName={post.userName}
                    description={post.description}
                    message={post.message}
                    photoUrl={post.photoUrl}
                />
            ))}

            <Post name="Aditya Sharma" description="test" message="WOW this works somehow" />
        </div>
    )
}

export default Feed