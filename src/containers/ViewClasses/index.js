import React, { Component } from 'react';

import CourseClass from './class'; 

class ViewClassList extends Component {
    
    render() {
        /*console.log("In posts");
        { alert(this.props) }
        return(<div>Hello World</div>); 
        <div>{ this.props.posts.map((item,index) =>
            <div key={index}><h3>{item}</h3></div>
                        )}</div></div>);*/
        
        //let posts = this.props.posts;
        
        let classes = this.props.classes;
        let classesSize = classes.length;
        
        //let _this = this;

        if (!classes) {
            return false;
        }

        if (this.props.loading) {
            return (
                <div className="classesLoad">
                    Loading...
                </div>
            );
        }

        return (
            <div className="Courses">
                { classes.map((item) =>
                    ( <div className="courseClassPair">
                          <h1>{ item.key }</h1>
                          <CourseClass val_coursenos={ item.val } />
                      </div>
                    )
                )}
            </div>
        );
        
        }
    }

export default ViewClassList;
