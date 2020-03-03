import React from 'react';
import Navbar from './components/navbar/navbar';
import { Route } from 'react-router';
import LoginContainer from './session/login_container'

const App = () => (
    <div>
        <Route exact path="/" component={Navbar} />
        <Route exact path="/login" component={LoginContainer} />
    </div>
);

export default App;