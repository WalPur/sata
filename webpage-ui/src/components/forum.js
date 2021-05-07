import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserBar from "./user-bar";
import NavBar from './navbar';
import Answer from './answer';
import './styles/header.css';
import './styles/main.css'

function Forum() {
    const [topic, setTopic] = useState([]);
    useEffect(() => {
        axios.get('/wapi/topics/', {
        }).then(response => {
            setTopic(response.data)
        })
    }, [])
    return (
        <div className="forum">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <div className="wrapper">
                <h1 className='welcome'>Форум</h1>
                {topic.map( t => (
                        <div className="Lesson">
                            <span className="lessonName">{t.question}</span>
                            <Answer id={t.id} />
                        </div>
                    ))}
            </div>
        </div>
      );
}

export default Forum;
