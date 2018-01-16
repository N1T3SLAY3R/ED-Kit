// routes.js

import React /*, { Component }*/ from "react";

import { /* BrowserRouter as Router , */ Route , Link , Switch , Redirect } from "react-router-dom";

import App from '../containers/App/';
import Posts from '../containers/ReadPosts';

import ReadRoute from './read_path';

const Routes = (props) => (   
    <div>
        {/*<Link to="/">Home</Link>*/}
        <Link to="/app/read_posts">Read Notes</Link>
        <Link to="/app/write_posts">Write Notes</Link>
        
        
            <Route path="/app" /* render={() => (<div>Hello World</div>)} */ component={ App } />
        <Switch>
            <Route path="/app/read_posts" component={ /* ReadRoute */ Posts } />
            <Route path="/app/write_posts" render={() => (<div>Hello World</div>)} />
            <Redirect path="*" to="/app/read_posts" />
        </Switch>
            
    </div>
);

export default Routes;
