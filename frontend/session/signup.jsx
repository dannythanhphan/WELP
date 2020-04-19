import React from 'react';
import { Link } from 'react-router-dom';

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
                <div id="login-top-bar">
                    <Link to="/">
                        <div id="welp-name-logo-login"/>
                    </Link>
                </div>
                <div id="body-div">
                    <div id="picture-signup-container">
                        <div id="signup-container">
                            <div className="signup-top-words">
                                Sign Up for Welp
                            </div>
                            <div className="signup-words">
                                Connect with great local businesses
                            </div>
                            
                            <div className="line-seperator"/>

                            <form>
                                <input 
                                    type="text" 
                                    onChange={this.handleInput('fname')} 
                                    value={this.state.fname} 
                                    className="first-input-box"
                                    placeholder="First"
                                />
                                <input 
                                    type="text" 
                                    onChange={this.handleInput('lname')} 
                                    value={this.state.lname} 
                                    className="last-input-box"
                                    placeholder="Last"
                                />
                                <br />
                                <input 
                                    type="text" 
                                    onChange={this.handleInput('username')} 
                                    value={this.state.username} 
                                    className="signup-input-box"
                                    placeholder="Username"
                                />
                                <br />
                                <input 
                                    type="text" 
                                    onChange={this.handleInput('email')} 
                                    value={this.state.email} 
                                    className="signup-input-box"
                                    placeholder="Email"
                                />
                                <br />
                                <input 
                                    type="password" 
                                    onChange={this.handleInput('password')} 
                                    value={this.state.password} 
                                    className="signup-input-box"
                                    placeholder="Password"
                                />

                                <br />
                                <button onClick={this.handleSubmit} className="signup-signup-button">Sign Up</button>
                                <div className="form-login-words">
                                    Already on Welp? 
                                    <Link to="/login" className="form-login-redirect">Log in</Link>
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