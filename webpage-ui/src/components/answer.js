import React, {useEffect, useState} from 'react';
import axios from 'axios';

class Answer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text: '',
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
        axios.post(`/wapi/message/`, {
            "message": {
                "text": this.state.text,
                "q": this.props.id
            }
        }).then((res) => {
            // на случай успеха
            this.props.history.go(0);
        })
    }
    render() {
        const { fireRedirect } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input class="textInput" type="text" name="text" value={this.state.ans} onChange={this.handleChange} />
                <input className="submitButton" type="submit" value="Ответить" />
            </form>
        )
    }
}

export default Answer;