import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Redirect } from "react-router";
import Cookies from 'universal-cookie';
import UserBar from "./user-bar";
import NavBar from './navbar';
import './styles/header.css';
import './styles/main.css';
import './styles/form.css';

class Patch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            surname: '',
            email: '',
            password: '',
            image: null,
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
        const cookies = new Cookies();
        const token = cookies.get('token');
        var formData = new FormData();
        if (this.state.name > '') formData.append("name", this.state.name);
        if (this.state.surname > "") formData.append("surname", this.state.surname);
        if (this.state.email > "") formData.append("email", this.state.email);
        if (this.state.password > "") formData.append("password", this.state.password);
        if (this.state.image != null) formData.append("avatar", this.state.image);
        console.log(formData);
        axios({
            method: "patch",
            url: "/api/user/",
            data: formData,
            headers: { "Authorization": `Bearer ${token}`, "Content-Type": "multipart/form-data" },
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
            <div className="patch">
                <header>
                    <NavBar />
                    <UserBar />
                </header>
                <div className="wrapper">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Имя:
                            <input class="textInput" type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                        </label>
                        <label>
                            Фамилия:
                            <input class="textInput" type="text" name="surname" value={this.state.surname} onChange={this.handleChange} />
                        </label>
                        <label>
                            E-mail:
                            <input class="textInput" type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                        </label>
                        <label>Пароль:
                            <input class="textInput" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                        <input className="submitButton" type="submit" value="Изменить" />
                        {fireRedirect && (
                            <Redirect to={'/lk'} />
                        )}
                    </form>
                </div>
            </div>
        )
    }
}

export default Patch;