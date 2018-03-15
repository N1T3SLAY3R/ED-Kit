import React, { Component } from 'react';

import Note from './note'; // TODO

class Posts extends Component {
    
    render() {
        /*console.log("In posts");
        { alert(this.props) }
        return(<div>Hello World</div>); 
        <div>{ this.props.posts.map((item,index) =>
            <div key={index}><h3>{item}</h3></div>
                        )}</div></div>);*/
        
        //let posts = this.props.posts;
        
        let posts = this.props.posts;
        
        //let _this = this;

        if (!posts) {
            return false;
        }

        if (this.props.loading) {
            return (
                <div className="loading">
                    <p className="posts">Loading...</p>
                </div>
            );
        }

        return (
            <section id="PostsWrapper">
                <h1 id="postsTitle">{ this.props.course } { this.props.courseno }</h1>
                <div className="Posts">
                    { posts.map((item) =>
                        <Note key={ item.key } val_key={ item.key } val_user={ item.val.user } val_datestamp={ item.val.date } val_tags={ item.val.tags } val_msg={ item.val.msg } val_votes={ item.val.votes } />
                    )}
                </div>
            </section>
        );
        
        }
    }

export default Posts;
