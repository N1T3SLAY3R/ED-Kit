import React, { Component } from 'react';
import '../../css/App.css';

import * as firebase from "firebase";

/**
 * Required props:
 * val_key   = key for the note in question in the firebase
 * val_votes = initial number of votes for the note
 * 
 * Likely future props:
 * - something for the database ref path (what class is this?)
 */
class NoteVote extends Component {
    
    /*state = {
        votes : this.props.val_votes
    }*/
    
    constructor(props){
        super(props);
        this.state  = {
            votes : this.props.val_votes
        }
        this.upvote    = this.upvote.bind(this);
        this.dnvote    = this.dnvote.bind(this);
        this.addtovote = this.addtovote.bind(this);
    }
    
    addtovote(val){
        // Class info
        let firebaseRef = firebase.database().ref();
        let UsaskRef = firebaseRef.child("UniversityOfSaskatchewan");
        let UsaskCoursesRef = UsaskRef.child("courseList");
        
        // TODO: This is for test purposes only, currently
        // set to CME 332
        let desiredCourseRef = UsaskCoursesRef.child("CME").child("332");
        
        let noteRef = desiredCourseRef.child(this.props.val_key);
        let votesRef = noteRef.child("votes");
        
        let newVotes = 0;

        votesRef.transaction(function (current_value) {
            newVotes = (current_value || 0) + val;
            return newVotes;
        });
        
        this.setState({
            votes : newVotes
        });
    }

    upvote(){
        //alert("increment counter for " + this.props.val_key);
        this.addtovote(1);
    }

    dnvote(){
        //alert("decrement counter for " + this.props.val_key);
        this.addtovote(-1);
    }

    render(){
        return(
            <div className="note_vote_controls_area">
                <button className="up_vote button" onClick={this.upvote}>Up Vote</button>
                <p className="vote_count">{this.state.votes}</p>
                <button className="up_vote button" onClick={this.dnvote}>Down Vote</button>
            </div>
        );
    }
}

export default NoteVote;
