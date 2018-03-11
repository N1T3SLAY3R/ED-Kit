import React, { Component } from 'react';
import Sidebar from 'react-sidebar';
import logo from '../../img/logo.svg'
import './Homepage.css';


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
 class Homepage extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       sidebarOpen: false
     }

     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
     this.onSetSidebarClose = this.onSetSidebarClose.bind(this);
   }

   onSetSidebarOpen() {
     this.setState({sidebarOpen: true});
   }

   onSetSidebarClose() {
     this.setState({sidebarOpen: false});
   }

   SidebarOpenButton(props){
     return(
       <button onClick={props.onClick}>
          ---
       </button>
     );
   }

   render() {
     var sidebarContent = <div id="sidebarStuff">
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Login/Register</button>
      <br />
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Search</button>
      <br />
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Classes</button>
      <br />
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Note Post</button>
      <br />
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Report</button>
      <br />
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Account</button>
      <br />
      <button className="sidebarButtons" onClick={this.onSetSidebarClose}>Close Sidebar</button>
      <br />
    </div>

     return (
       <Sidebar sidebar={sidebarContent}
                open={this.state.sidebarOpen}
                onSetOpen={this.setSidebarOpen}>
         <div id="sidebarOpen">
            <button id="sidebarOpen" onClick={this.onSetSidebarOpen}>Pages</button>
         </div>
         <div>
           <img className="logo" src={logo} height = "600"/>
           <b id="home1">Welcome to the Ed-Kit App Homepage!</b>
           <br />
           <b id="home2">The sidebar on the left has all current the pages.</b>
         </div>
       </Sidebar>
     );
   }
 };

export default Homepage;
