import React, { Component } from 'react';
import '../../css/App.css';

/**
 * Required props:
 * val = array of tags
 */
class NoteTag extends Component {
    render(){
        return (
            <a href={this.props.val}>
                <p className="note_tag">
                    {this.props.val}
                </p>
            </a> 
        );
    };
}

export default NoteTag;
