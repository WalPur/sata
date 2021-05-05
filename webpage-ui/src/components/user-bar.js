import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

function UserBar() {
    var fireRedirect = false;
    const cookies = new Cookies();
    const token = cookies.get('token');
    console.log(token);
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
                <div className="userBar">
                    <Link to={{ pathname: `/lk`, fromDashBoard: false}}>{res.data.user.username}</Link>
                    <Link to={{ pathname: `/logout`, fromDashBoard: false }}><button>Logout</button></Link>
                </div>
            )
        }).catch((error) => {
            // на случай ошибки(отсуствия токена)
            setUser(
                <div className="logChoose">
                    <Link to={{ pathname: `/login`, fromDashBoard: false}}>Login</Link>
                    <Link to={{ pathname: `/reg`, fromDashBoard: false}}>Registration</Link>
                </div>
            );
        })
    }, [])
    return (
        <div className="userBar">
            <h2>User status:</h2>
            {user}
        </div>
    )
}

export default UserBar;
