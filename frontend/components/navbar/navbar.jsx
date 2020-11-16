import React from 'react';
import { Link } from 'react-router-dom';
import HomeBodyContainer from './home_body_container';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            loaded: true
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
        this.setState({ loaded: false });
        if (this.state.category.length < 1) {
            this.props.updateFilters("category", "Restaurant")
                .then(() => {
                    this.setState({ loaded: true });
                    document.getElementsByClassName("footer-container")[0].style.display = "block"
                    this.props.history.push("/search");
                })

        } else {
            this.props.updateFilters("category", this.state.category)
            .then(() => {
                this.setState({ loaded: true });
                document.getElementsByClassName("footer-container")[0].style.display = "block"
                this.props.history.push("/search");
            })
        }
    }

    demoSubmit(e) {
        e.preventDefault();
        const user = {username: "Phantom", password: "password"}
        this.props.login(user)
            .then(() => this.props.history.push('/'));
    }

    render() {
        const { currentUser, logout } = this.props

        if (this.state.loaded === false) {
            document.getElementsByClassName("body-container")[0].style.display = "none"
            document.getElementsByClassName("footer-container")[0].style.display = "none"
            return (
                <div className="loading-container">
                    <div className="loading-header">
                        <div id="welp-name-logo-login"></div>
                    </div>
                    <div className="loading-body">
                        <div className="big-o-popup"></div>    
                    </div>
                    <div className="loading-footer">
                        <div className="footer-image-pop"></div>
                    </div>

                </div>
            )
        }

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
                    <div className="socials-container">
                        <div className="github-container">
                            <a href="https://github.com/dannythanhphan" 
                                className="home-github"
                                target="_blank"
                            >
                            </a>
                            <a href="https://github.com/dannythanhphan" 
                                className="github-text"
                                target="_blank">GitHub</a>
                        </div>

                        <div className="linkedin-container">
                            <a href="https://www.linkedin.com/in/danny-phan-0b6307184/"
                                className="home-linkedin"
                                target="_blank">
                            </a>

                            <a href="https://www.linkedin.com/in/danny-phan-0b6307184/"
                                className="linkedin-text"
                                target="_blank">LinkedIn</a>
                        </div>
                    </div>
                    {logged}
                </div>


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