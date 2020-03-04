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
                    <div id="welp-name-logo-login">

                    </div>
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
                            <div className="legal-stuff">
                                By loggin in, you agree to Welp's 
                                <a href="" className="login-tos">Terms of Service</a>
                                
                                <br/>
                                <div className="legal-stuff-organized">
                                    <p>and</p>
                                    <a href="" className="login-privacy">Privacy Policy.</a>
                                </div>

                            </div>
                            <div className="social-login-buttons-container">
                                <button className="facebook-login" disabled>
                                    <i className="fab fa-facebook-square fa-lg"></i>
                                    Log In with Facebook</button>
                                <br/>
                                <button className="google-login" disabled>
                                    <i className="fab fa-google fa-lg"></i>
                                    Log In with Google</button>
                            </div>
                            <fieldset className="line-seperator">
                                <legend className="or-seperator">OR</legend>
                            </fieldset>
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
                                <br />
                                <a href="" className="forgot-password">Forgot password?</a>
                                <br/>
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