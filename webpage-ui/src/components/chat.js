import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import UserBar from "./user-bar";
import NavBar from './navbar';
import Answer from './answer';
import './styles/header.css';
import './styles/main.css'
import './styles/chat.css'

function Chat() {
    const [topic, setTopic] = useState([]);
    const history = useHistory()
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
                            <ul>
                                {t.messages.map( message => (
                                    <li>{message.text}</li>
                                ))}
                            </ul>
                            <Answer id={t.id} history={history} />
                        </div>
                    ))}
            </div>
        </div>
      );
}

export default Chat;
