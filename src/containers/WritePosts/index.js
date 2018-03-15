import React, { Component } from 'react';
import '../../css/App.css';
import '../../css/Form.css';

import * as firebase from "firebase";

/**
 * Required props:
 * val_id    = id of the form object // TODO: may be a hash/concat of other vals?
 * val_uni   = university the course notes pertain to
 * val_class = university class (EG: CME332) // TODO: break into class type, number, and section?
 *
 * Optional props:
 * val_user = user logged in
 */
class Form extends Component {
    constructor(props){
        super(props);
        this.processForm = this.processForm.bind(this);
        this.clearForm = this.clearForm.bind(this);
        this.renderForm  = this.renderForm.bind(this);
        this.alertUser  = this.alertUser.bind(this);
    }

    /**
     * Placeholder function to alert the user as to the
     * success or failure of a transmission, or to give
     * other potential error-handling information.
     *
     * Currently just an alert; will likely modify the
     * DOM (via setting state) in the future, if this is
     * kept.
     */
    alertUser(msg){
        alert(msg);
    }

    processForm(){
        let author = this.props.val_user ? this.props.val_user : "anon";
        let textareaText = this._textareaText.value.trim();
        let tags = this._tagText.value.trim();
        let tagsArr = [];

        // Create data transmit object
        let newNote = {
            user  : author,
            msg   : textareaText,
            votes : 0
        };

        if (tags !== "") {
            newNote.tags = tags.split(" ");
        }

        // For debugging
        //alert(textareaText + ' ' + tagsArr + ' ' + author);
        //alert("Note = { user: " + newNote.user + ", msg: " + newNote.msg + ", tags: " + (newNote.hasOwnProperty('tags') ? newNote.tags : "null") + ", votes: " + newNote.votes + " }");

        // TODO: temps for test purposes only, currently
        // set to CME 332
        // Class info
        let firebaseRef = this.props.firebaseDb.ref();
        let UsaskRef = firebaseRef.child("UniversityOfSaskatchewan");
        let UsaskCoursesRef = UsaskRef.child("courseList");
        let desiredCourseRef = UsaskCoursesRef.child("CME").child("332");

        // Push object onto database at location in desiredCourseRef
        desiredCourseRef.push(newNote);

        // Cleanup
        this.alertUser("Successfully added the note!");
        this.clearForm();
    }

    clearForm(){
        this._textareaText.value = "";
        this._tagText.value = "";
    }

    renderForm(){
        // Default form action is none (no refresh) (#)
        return (
            <form id={this.props.val_id} action="#">
                    <legend id="title">
                        Post a note for { this.props.val_class } at { this.props.val_uni }
                    </legend>
<br />
                        <legend id="legendtext">
                            Tags: (separate using spaces)
                        </legend>
                        <input type="text" className="tagfield" maxLength="80" ref={ input => this._tagText = input } />
<br />
<br />
                        <legend id="legendtext">
                            Message Contents:
                        </legend>
                        <textarea id="legendTextPlaceholder" placeholder="Write note contents here..." className="textfield" maxLength="4096" ref={ input => this._textareaText = input }></textarea>
<br />
<br />
                    <button className="button submit_button" onClick={this.processForm}>Submit</button>
            </form>
        );
    }


    render(){
        return (
            this.renderForm()
        );
    };
}

export default Form;
