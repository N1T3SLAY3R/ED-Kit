import React, { Component } from 'react';
import '../../css/App.css';

import NoteTag from './notetag';
import NoteVote from './notevote';

/**
 * Required props:
 * val_key = key of the post in the firebase
 * 
 * Optional props:
 * val_user  = user who posted the firebase post
 * val_tags  = tags of the post (sent to <NoteTag>)
 * val_msg   = message contents in the firebase
 * val_votes = votes for the note in the firebase
 * 
 * Likely future props:
 * - something for the database ref path (what class is this?)
 */
class Note extends Component {
    render(){       
        return(
            <article id={this.props.val_key}>
                { /* See if tags exist and render if so (what the "...prop && <elem>" is for) */ }
                { this.props.val_user && (
                    <h2 className="note_user_format">
                        Posted By: {this.props.val_user}
                    </h2> )
                }
                { this.props.val_tags && (
                    this.props.val_tags.map((x, i) => (
                        <NoteTag key={x} val={x} />
                    )))
                }
                { this.props.val_msg && (
                    <p className="note_message_format">
                        {this.props.val_msg}
                    </p> )
                }
                { (!isNaN(this.props.val_votes)) && (
                    <NoteVote val_key={this.props.val_key} val_votes={this.props.val_votes} /> )
                }
            </article>
        );
    }
}

export default Note;
