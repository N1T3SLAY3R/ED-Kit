import React, { Component } from 'react';
import '../../css/RegisterPage.css';
import Sidebar from 'react-sidebar';

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
 class RegisterPage extends React.Component {
   constructor(props) {
     super(props);

     this.state = {
     }
     this.register = this.register.bind(this);
   }

   render() {
     return (
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
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button id="btnSubmit" onClick={this.submitSearch}>Submit</button>
                </div>
     );
   }
 };

export default RegisterPage;
