import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';

import Routes from './nav/routes';
import registerServiceWorker from './utils/registerServiceWorker';

import App from './containers/App';
import Posts from './containers/ReadPosts';
import Form from './containers/WritePosts';
import SearchPage from './containers/SearchPage';
import LoginPage from './containers/LoginPage';
import RegisterPage from './containers/RegisterPage';

import { BrowserRouter as Router /*, Route , Link , Switch*/ } from "react-router-dom";

ReactDOM.render(
    /*(
    <Router>
        <Routes />
    </Router>
    )*/
    (
        <App>
            <LoginPage />
        </App>
    )
    /*(
        <App>
            <Form val_id="UofSCME332" val_uni="University Of Saskatchewan" val_class="CME332" />
        </App>
    )*/
    , document.getElementById('root')
);

registerServiceWorker();
