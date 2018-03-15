import React, { Component } from 'react';
import '../../css/App.css';

/**
 * Required props:
 * val = array of tags
 */
class NoteTag extends Component {
    render(){
        return (
            <p className="note_tag">
                <a href={this.props.val}>
                    {this.props.val}
                </a> 
            </p>
            
        );
    };
}

export default NoteTag;
