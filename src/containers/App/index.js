// App/index.js

import React, { Component } from 'react';

import * as firebase from "firebase";

import config from './firebase-config';

import Posts from '../ReadPosts';


class App extends Component {

    state = {
        posts   : [],
        loading : true
    }

    constructor(){
        super();
        
        // Initialize Firebase
        firebase.initializeApp(config);
    }

    componentWillMount(){
        // Class info
        let firebaseRef = firebase.database().ref();
        let UsaskRef = firebaseRef.child("UniversityOfSaskatchewan");
        let UsaskCoursesRef = UsaskRef.child("courseList");
        
        // TODO: This is for test purposes only, currently
        // set to CME 332
        let desiredCourseRef = UsaskCoursesRef.child("CME").child("332");
        
        let _this = this;
        
        desiredCourseRef.on("child_added", snap1 => {
            // console.log(snap1.key); // Debugging
            
            _this.setState({
                posts: _this.state.posts.concat({key : snap1.key, val : snap1.val()}),
                loading: false
            });
        });
    }


    render(){
        return (
            <div className="App">
                { this.props.children && React.cloneElement(this.props.children, {
                    firebaseDb: firebase.database(),
                    posts: this.state.posts,
                    loading: this.state.loading
                }) }
            </div>
        );
    }

}

export default App;
