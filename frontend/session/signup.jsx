import React from 'react';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            fname: "",
            lname: "",
            email: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/'));
    }

    render() {
        return (
            <div className="session-form">
                <form>
                    <label>Username:
                        <input type="text" onChange={this.handleInput('username')} value={this.state.username} />
                    </label>
                    <br />
                    <label>First Name:
                        <input type="text" onChange={this.handleInput('fname')} value={this.state.fname} />
                    </label>
                    <br />
                    <label>Last Name:
                        <input type="text" onChange={this.handleInput('fname')} value={this.state.lname} />
                    </label>
                    <br />
                    <label>Email:
                        <input type="text" onChange={this.handleInput('email')} value={this.state.email} />
                    </label>
                    <br />
                    <label>Password:
                        <input type="password" onChange={this.handleInput('password')} value={this.state.password} />
                    </label>
                    <br />
                    <button onClick={this.handleSubmit}>Sign Up</button>
                </form>
            </div>
        )
    }
}