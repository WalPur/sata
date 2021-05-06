import React, {useEffect, useState} from 'react';
import axios from 'axios';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import './styles/main.css';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';


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
            <div className="wrapper">
                <h1 className='welcome'>Личный кабинет</h1>
                <p>Имя: {user.name}</p>
            <p>Фамилия: {user.surname}</p>
            <p>Email: {user.email}</p>
            <Link to={{ pathname: `/logout`, fromDashBoard: false }}><button>Logout</button></Link>
            </div>
        </div>
      );
}

export default UserPage;
