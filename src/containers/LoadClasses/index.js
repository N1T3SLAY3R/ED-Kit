// App/index.js

import React, { Component } from 'react';

import * as firebase from "firebase";

import config from '../App/firebase-config';

import '../../css/General.css'; 


class ClassList extends Component {

    state = {
        classes : [],
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
        
        let _this = this;
        
        UsaskCoursesRef.on("child_added", snap1 => {
            // console.log(snap1.key); // Debugging
            
            _this.setState({
                classes: _this.state.classes.concat({key : snap1.key, val : snap1.val()}),
                loading: false
            });
        });
    }


    render(){
        return (
            <div className="ClassList">
                { this.props.children && React.cloneElement(this.props.children, {
                    firebaseDb: firebase.database(),
                    classes: this.state.classes,
                    loading: this.state.loading
                }) }
            </div>
        );
    }

}

export default ClassList;