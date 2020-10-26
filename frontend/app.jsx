import React from 'react';
import NavbarContainer from './components/navbar/navbar_container';
import { Route, Switch } from 'react-router';
import LoginContainer from './session/login_container'
import SignupContainer from './session/signup_container'
import BusinessShowContainer from './components/business/business_show_container'
import SearchContainer from './components/search/search_container';
import HomeBodyContainer from './components/navbar/home_body_container';
import ReviewFormContainer from './components/business/review_form_container';
import Footer from './components/navbar/footer';

const App = () => (
    <div>
        <Switch>
            <Route exact path="/businesses/:business_id/reviews" component={ReviewFormContainer}/>
            <Route exact path="/businesses/:id" component={BusinessShowContainer} />
            <Route exact path="/search" component={SearchContainer} />
            <Route exact path="/signup" component={SignupContainer} />
            <Route exact path="/login" component={LoginContainer} />
        </Switch>
        <div className="home-page-page">
            <Route exact path="/" component={NavbarContainer} />
            <Route exact path="/" component={HomeBodyContainer} />
            <Route path ="/" component={Footer} />
            
        </div>
            
    </div>
);

export default App;