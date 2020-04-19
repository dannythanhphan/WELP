import React from 'react';
import { Link } from 'react-router-dom';
class BusinessShowHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: ""
        };
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        this.setState({ category: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilters("category", this.state.category)
            // .then(() => this.props.history.push("/search"))
    }

    render() {
        const { currentUser, logout } = this.props

        let logged = (currentUser) ? (
            <div className="logged-in-con">
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
                <div className="business-session-buttons">
                    <div className="business-login-button">
                        <Link to='/login' className="business-login-button-text">Log In</Link>
                    </div>
                    <div className="business-signup-button">
                        <Link to='/signup' className="business-signup-button-text">Sign Up</Link>
                    </div>
                </div>
            )
        return (
            <div className="business-show-header">
                <Link to="/" className="show-logo-button"><div className="show-logo"></div></Link>
                <div className="show-search-bar">
                    <form className="show-search-container">
                        <input 
                            type="text"
                            className="show-search add-shadow1"
                            placeholder="tacos, cheap dinner, Max's"
                            onChange={this.handleInput}
                        />
                        
                        <input 
                            type="text"
                            className="show-search show-search-border"
                            placeholder="San Francisco, CA"
                        />
                        <button className="business-search-button" onClick={this.handleSubmit}>
                            <i className="fas fa-search fa-lg"></i>
                        </button>
                    </form>
                </div>
                {logged}
            </div>
        );
    }
};

export default BusinessShowHeader;