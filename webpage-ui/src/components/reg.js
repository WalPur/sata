import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { Redirect } from "react-router";
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';


class Registration extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
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
        axios.post('/api/users/', {
            user: {
                username: this.state.username,
                email: this.state.email,
                password: this.state.password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            // на случай успеха
            const cookies = new Cookies();
            cookies.set('token', res.data.user.token, { path: '/' });
            this.setState({ fireRedirect: true })
        }).catch((error) => {
            console.log(error)
            // на случай ошибки(отсуствия токена)
        })
    }
    render() {
        const { fireRedirect } = this.state
        return (
            <div className="registration">
                <header>
                    <NavBar />
                    <UserBar />
                </header>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Имя:
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                    </label>
                    <label>
                        Фамилия:
                        <input type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                    </label>
                    <label>
                        E-mail:
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <label>Пароль:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Отправить" />
                    {fireRedirect && (
                        <Redirect to={'/'} />
                    )}
                </form>
            </div>
        )
    };
}

export default Registration;
