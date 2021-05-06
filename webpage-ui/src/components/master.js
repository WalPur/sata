import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import './styles/main.css';

function Lessons() {
    const [lesson, setLesson] = useState([]);
    useEffect(() => {
        axios.get('/wapi/lessons', {
        }).then(response => {
            setLesson(response.data)
        })
    }, [])
    return (
        <div className="userPage">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <div className="wrapper">
                <h1 className='welcome'>Мастер классы</h1>
                <div className="Lessons">
                    {lesson.map( l => (
                        <div className="Lesson">
                            <span className="lessonName">l.name</span>
                            <button className="enlistButton">Записаться</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      );
}

export default Lessons;
