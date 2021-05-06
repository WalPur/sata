import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router";
import { Link } from 'react-router-dom';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import './styles/main.css';
import './styles/form.css';


class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            fireRedirect: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {    
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value    
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post('/api/users/login/', {
            "user": {
                "email": this.state.email,
                "password": this.state.password
            }
        }).then((res) => {
            // на случай успеха
            const cookies = new Cookies();
            cookies.set('token', res.data.user.token, { path: '/' });
            this.setState({ fireRedirect: true })
        }).catch((error) => {
            // на случай ошибки(отсуствия токена)
        })
    }
    render() {
        const { fireRedirect } = this.state
        return (
            <div className="login">
                <header>
                    <NavBar />
                    <UserBar />
                </header>
                <div className="wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Почта:
                            <input class="textInput" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label>Пароль:
                            <input class="textInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                        <input className="submitButton" type="submit" value="Отправить" />
                        <Link className="toRegPage" to={{ pathname: `/reg`, fromDashBoard: false }}>Регистроваться</Link>
                        {fireRedirect && (
                            <Redirect to={'/'} />
                        )}
                    </form>
                </div>
            </div>
        )
    };
}

export default Login;
