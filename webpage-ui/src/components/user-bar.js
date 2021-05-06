import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import './styles/userbar.css';

function UserBar() {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const [user, setUser] = useState(``);
    useEffect(() => {
        axios.get('/api/user', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            // на случай успеха
            cookies.set('token', res.data.user.token, { path: '/' });
            setUser(
                <Link className="userInfo" to={{ pathname: `/lk`, fromDashBoard: false}}>
                    <img className="Avatar" src={res.data.user.avatar} alt='Ваш аватар' />
                    <span className="userName">{res.data.user.name} {res.data.user.surname}</span>
                </Link>
            )
        }).catch((error) => {
            // на случай ошибки(отсуствия токена)
            setUser(
                <div className="logChoose">
                    <Link className="chooseButton" to={{ pathname: `/login`, fromDashBoard: false}}>Войти</Link>
                    <Link className="chooseButton" to={{ pathname: `/reg`, fromDashBoard: false}}>Регистрация</Link>
                </div>
            );
        })
    }, [])
    return (
        <div className="userBar">
            {user}
        </div>
    )
}

export default UserBar;
