import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state)
            .then(() => this.props.history.push('/'));
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    render() {
        return (
            <div className="session-form">
                <div id="login-top-bar">
                    <div id="welp-name-logo-login">

                    </div>
                </div>
                <div id="body-div">
                    <div id="picture-login-container">
                        <div id="login-container">
                            <form>
                                <label>Username:
                                    <input type="text" onChange={this.handleInput("username")} value={this.state.username} />
                                </label>
                                <br />
                                <label>Password:
                                    <input type="password" onChange={this.handleInput("password")} value={this.state.password} />
                                </label>
                                <br />
                                <button onClick={this.handleSubmit}>Login</button>
                            </form>
                        </div>
                        <div id="picture-container">
                            
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}