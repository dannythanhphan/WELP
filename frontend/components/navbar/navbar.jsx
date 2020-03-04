import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoSubmit = this.demoSubmit.bind(this)
    }

    handleInput(e) {
        this.setState({ category: e.target.value })
    }

    handleSubmit(e) {

    }

    demoSubmit(e) {
        e.preventDefault();
        const user = {username: "Phantom", password: "password"}
        this.props.login(user)
            .then(() => this.props.history.push('/'));
    }

    render() {
        const { currentUser, logout } = this.props

        let logged = (currentUser) ? (
            <div className="logged-in-container">
                <div className="message-button">
                    <button className="message-icon">
                        <i className="fas fa-comment-alt"></i>
                    </button>
                </div>
                <div className="notification-button">
                    <button className="notification-icon">
                        <i className="fas fa-bell"></i>
                    </button>
                </div>
                <div className="profile-dropdown-arrow">
                    <div className="profile-dropdown">
                        <button className="arrow-down">
                            <i className="fas fa-caret-down"></i>
                        </button>
                        <div className="dropdown-arrow-container">
                            <div className="dropdown-arrow"></div>
                        </div>
                        <div className="profile-dropdown-content">
                            <div className="pp-user-info-container">
                                <div className="pp-ui-container">
                                    <div className="profile-picture">
                                    </div>
                                    <div className="user-info">
                                        <p className="user-info-name">{currentUser.fname} {currentUser.lname[0]}.</p>
                                        <p className="user-info-username">{currentUser.username}</p>
                                    </div>
                                </div>    
                                <div className="profile-buttons">
                                    <div className="profile-dropdown-button">
                                        <i className="fas fa-user fa-"></i>
                                        <p className="profile-dropdown-words">About Me</p>
                                    </div>
                                    <div className="profile-dropdown-button">
                                        <i className="fas fa-user-friends"></i>
                                        <p className="profile-dropdown-words">Find Friends</p>
                                    </div>
                                    <div className="profile-dropdown-button">
                                        <i className="fas fa-dollar-sign"></i>
                                        <p className="profile-dropdown-words">Cash Back</p>
                                    </div>
                                    <div className="profile-dropdown-button">
                                        <i className="fas fa-cog"></i>
                                        <p className="profile-dropdown-words">Account Settings</p>
                                    </div>
                                </div>
                                <button onClick={logout} className="logout-button">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <div id="session-buttons">
                <div id="login-button">
                    <Link to='/login' id="login-button-text">Log In</Link>
                </div>
                <div id="signup-button">
                    <Link to='/signup' id="signup-button-text">Sign Up</Link>
                </div>
                <div id="demo-button-container">
                    <button className="demo-button" onClick={this.demoSubmit}>
                        <p className="demo-word">Demo</p>
                    </button>
                </div>
            </div>
        )
        return (
            <div id="nav-bar">
                <div id="home-buttons-container">
                    <div id="write-a-review-container">
                        <a id="home-review-button" href="" >Write a Review</a>
                    </div>
                    <div id="events-container">
                        <a id="event-button" href="">Events</a>
                    </div>
                    <div id="talk-container">
                        <a id="talk-button" href="">Talk</a>
                    </div>
                </div>

                {logged}

                <div id="welp-name-logo">
                    
                </div>
                <div id="home-search-bar">
                    <form>
                        <input id="find" type="text" value="Find" disabled/>
                        <input id="food-search" type="text" readOnly={this.state.category}/>
                        <input id="near" type="text" value="Near" disabled/>
                        <input id="city-search" type="text" value="San Francisco, CA"/>
                        <button id="home-search-button"><i className="fas fa-search fa-lg"></i></button>
                    </form>
                </div>
                <div id="home-category-buttons">

                </div>
            </div>
        );
    }
}

export default Navbar