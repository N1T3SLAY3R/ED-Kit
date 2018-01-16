// read_path.js

import React /*, { Component }*/ from "react";

import App from '../containers/App';
import Posts from '../containers/ReadPosts';

const ReadRoute = ({ children }) => (
    <App>
        {children}
    </App>
);

export default ReadRoute;