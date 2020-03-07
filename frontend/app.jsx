import React from 'react';
import NavbarContainer from './components/navbar/navbar_container';
import { Route } from 'react-router';
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container'
import BusinessShowContainer from './components/business/business_show_container'
import SearchContainer from './components/search/search_container';

const App = () => (
    <div>
        <Route exact path="/" component={NavbarContainer} />
        <Route exact path="/search" component={SearchContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/businesses/:id" component={BusinessShowContainer} />
    </div>
);

export default App;