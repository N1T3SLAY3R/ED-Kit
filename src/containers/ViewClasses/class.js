import React, { Component } from 'react';
import '../../css/App.css';


class CourseClass extends Component {
    render(){
        return(
            <article className="courseNumberBox">
                <select>
                <option value=""></option>
                    { this.props.val_coursenos && (
                        Object.keys(this.props.val_coursenos).map((x) => (
                            <option value="{x}">{x}</option>
                        )))
                    }
                </select>
            </article>
        );
    }
}

export default CourseClass;
