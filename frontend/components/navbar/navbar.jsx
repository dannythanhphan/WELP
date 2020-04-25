import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoSubmit = this.demoSubmit.bind(this)
    }

    handleInput(e) {
        this.setState({ category: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilters("category", this.state.category)
            .then(() => this.props.history.push("/search"))
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
                <div className="profile-dropdown-arrow">
                    <div className="profile-dropdown">
                        <img src={`${currentUser.photoUrl}`} className="profile-picture-main"/>
                        <button className="arrow-down">
                            <i className="fas fa-caret-down"></i>
                        </button>
                        <div className="dropdown-arrow-container">
                            <div className="dropdown-arrow"></div>
                        </div>
                        <div className="profile-dropdown-content">
                            <div className="pp-user-info-container">
                                <div className="pp-ui-container">
                                    <img src={`${currentUser.photoUrl}`} className="profile-picture"/>
                                    <div className="user-info">
                                        <p className="user-info-name">{currentUser.fname} {currentUser.lname[0]}.</p>
                                        <p className="user-info-username">{currentUser.username}</p>
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
            <div className="nav-bar">
                <div className="home-socials-container">
                    <div className="github-container">
                        <a href="https://github.com/dannythanhphan" 
                            className="home-github">
                        </a>
                        <a href="https://github.com/dannythanhphan" 
                            className="github-text">GitHub</a>
                    </div>

                    <div className="linkedin-container">
                        <a href="https://www.linkedin.com/in/danny-phan-0b6307184/"
                            className="home-linkedin">
                        </a>

                        <a href="https://www.linkedin.com/in/danny-phan-0b6307184/"
                            className="linkedin-text">LinkedIn</a>
                    </div>
                </div>

                {logged}

                <div id="welp-name-logo">
                    
                </div>
                
                <div id="home-search-bar">
                    <form>
                        <input id="find" type="text" value="Find" disabled/>
                        <input 
                            id="food-search" 
                            type="text" 
                            value={this.state.category} 
                            onChange={this.handleInput}
                            placeholder="restaurant, home, auto, other"
                        />
                        <input id="near" type="text" value="Near" disabled/>
                        <input id="city-search" type="text" placeholder="San Francisco" />
                        <button id="home-search-button" onClick={this.handleSubmit}>
                            <i className="fas fa-search fa-lg"></i>
                        </button>
                    </form>
                </div>
                <div id="home-category-buttons">

                </div>
            </div>
        );
    }
}

export default Navbar