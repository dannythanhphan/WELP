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
    }

    handleInput(e) {
        this.setState({ category: e.target.value })
    }

    handleSubmit(e) {

    }

    render() {
        let logged = (this.props.currentUser) ? (
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
                <div className="profile-dropdown">

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