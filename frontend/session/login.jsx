import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to="/">
                        <div id="welp-name-logo-login"/>
                    </Link>
                </div>
                <div id="body-div">
                    <div id="picture-login-container">
                        <div id="login-container">
                            <div className="login-top-words">
                                Log In to Welp
                            </div>
                            <div className="login-signup-words">
                                New to Welp? 
                                <Link to="/signup" className="signup-redirect">Sign Up</Link>
                            </div>

                            <div className="line-seperator"/>
                            <form>
                                <input 
                                    type="text" 
                                    onChange={this.handleInput("username")} 
                                    value={this.state.username} 
                                    placeholder="Username" 
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
                                
                                <button className="login-login-button" onClick={this.handleSubmit}>Log In</button>
                                <div className="form-signup-words">
                                    New to Welp?
                                    <Link to="/signup" className="form-signup-redirect">Sign Up</Link>
                                </div>
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