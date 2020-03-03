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
                            <div></div>
                            <fieldset className="line-seperator">
                                <legend className="or-seperator">OR</legend>
                            </fieldset>
                            <form>
                                <input 
                                    type="text" 
                                    onChange={this.handleInput("username")} 
                                    value={this.state.username} 
                                    placeholder="Email" 
                                    className="login-username-box"
                                />
                                <br />
                                <input 
                                    type="password" 
                                    onChange={this.handleInput("password")} 
                                    value={this.state.password} 
                                    placeholder="Password"
                                    className="login-password-box"
                                />
                                <br />
                                <a href="" className="forgot-password">Forgot password?</a>
                                <br/>
                                <button className="login-login-button" onClick={this.handleSubmit}>Log In</button>
                            </form>
                        </div>
                        <div id="picture-container">
                            <div id="picture-container-content">

                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}