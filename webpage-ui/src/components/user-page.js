import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import Cookies from 'universal-cookie';


function UserPage() {
    const [user, setUser] = useState(``);
    const cookies = new Cookies();
    const token = cookies.get('token');
    useEffect(() => {
        axios.get('/api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // на случай успеха
            cookies.set('token', res.data.user.token, { path: '/' });
            setUser(res.data.user)
        }).catch((error) => {
            // на случай ошибки(отсуствия токена)
            setUser()
        })
    }, [])
    return (
        <div className="userPage">
            <header>
                <NavBar />
                <UserBar />
            </header>
            <p>Имя: {user.name}</p>
            <p>Фамилия: {user.surname}</p>
            <p>Email: {user.email}</p>
        </div>
      );
}

export default UserPage;
