import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';


function UserPage() {
    const [user, setUser] = useState(``);
    useEffect(() => {
        axios.get('/api/user', {
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwiZXhwIjoxNjI1Mzk1MTk5fQ.hnk_8xGlIcIPBewxKr4jbHBePohgOlbdg-WZcFFYcdY`
            }
        }).then((res) => {
            // на случай успеха
            setUser(res.data.user)
        }).catch((error) => {
            // на случай ошибки(отсуствия токена)
            setUser()
        })
    }, [])
    return (
        <div className="userBar">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
      );
}

export default UserPage;
