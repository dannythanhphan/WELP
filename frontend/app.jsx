import React from 'react';
import NavbarContainer from './components/navbar/navbar_container';
import { Route } from 'react-router';
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container'

const App = () => (
    <div>
        <Route exact path="/" component={NavbarContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
    </div>
);

export default App;