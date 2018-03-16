import React, { Component } from 'react';
import '../../css/SearchPage.css';
import Sidebar from 'react-sidebar';

import WritePosts from '../WritePosts';
import ReactDOM from 'react-dom';
import App from '../App';

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
 class SearchPage extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
       selectedOption: 'class',
       sidebarOpen: false //Im a austin
     }
     this.selectClass = this.selectClass.bind(this);
     this.selectNote = this.selectNote.bind(this);
     this.selectTag = this.selectTag.bind(this);
     this.submitSearch = this.submitSearch.bind(this);
     this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);  //im a austin
     this.onSetSidebarClose = this.onSetSidebarClose.bind(this);  //im a austin
   }

   selectClass() {
     this.setState({selectedOption: 'class'});
   }
      selectNote() {
        this.setState({selectedOption: 'note'});
      }
         selectTag() {
           this.setState({selectedOption: 'tag'});
         }

   submitSearch() {
     ReactDOM.render(
      <App>
        <WritePosts />
      </App>
      , document.getElementById('root')
     );
   }

   //im a austin
   onSetSidebarOpen() {
     this.setState({sidebarOpen: true});
   }

   //im a austin
   onSetSidebarClose() {
     this.setState({sidebarOpen: false});
   }

   //im a austin
   SidebarOpenButton(props){
     return(
       <button onClick={props.onClick}>
          ---
       </button>
     );
   }

   render() {
     //im a austin
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
              //im a austin
              <Sidebar sidebar={sidebarContent}
                       open={this.state.sidebarOpen}
                       onSetOpen={this.setSidebarOpen}>
                <div id="sidebarOpen">
                   <button id="sidebarOpen" onClick={this.onSetSidebarOpen}>Pages</button>
                </div>

                <div>
                  <b id="txtTitle">Search Page</b>
                  <br />
                  <br />
                  <br />
                  <br />
                  <b id="txtSearch">Enter Criteria</b>
                  <br />
                  <input id="inputSearch" className="inputSearch" maxLength="80" ref={ input => this._inputSearch = input } />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <b id="txtType">Search Category</b>
                  <br />
                  <form>
         <div className="radio" id="radioButtonType">
           <label>
             <input type="radio" value="class"
                           checked={this.state.selectedOption === 'class'}
                           onChange={this.selectClass} />
             Class
           </label>
         </div>
         <div className="radio" id="radioButtonType">
           <label>
             <input type="radio" value="note"
                           checked={this.state.selectedOption === 'note'}
                           onChange={this.selectNote} />
             Note
           </label>
         </div>
         <div className="radio" id="radioButtonType">
           <label>
             <input type="radio" value="tag"
                           checked={this.state.selectedOption === 'tag'}
                           onChange={this.selectTag} />
             Tag
           </label>
         </div>
       </form>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button id="btnSubmit" onClick={this.submitSearch}>Submit</button>
                </div>

              </Sidebar>


     );
   }
 };

export default SearchPage;
