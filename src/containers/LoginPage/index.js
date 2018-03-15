import React, { Component } from 'react';
import '../../css/LoginPage.css';
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
 class LoginPage extends React.Component {
   constructor(props) {
     super(props);

     this.state = {

     }
     this.btnLogin = this.btnLogin.bind(this);
     this.btnRegister = this.btnRegister.bind(this);
   }
      btnLogin() {
        //TODO
      }
         btnRegister() {
           //TODO
         }

   render() {
     return (
                <div>
                  <b id="txtTitle">Title Page</b>
                  <br />
                  <br />
                  <br />
                  <br />
                  <b id="txtUserName">Enter Username: </b>
                  <input id="inputUserName" className="inputUserName" maxLength="80" ref={ input => this._inputUserName = input } />
                  <br />
                  <b id="txtPassword">Enter Password: </b>
                  <input id="inputPassword" className="inputPassword" maxLength="80" ref={ input => this._inputPassword = input } />
                  <br />
                  <br />
                  <button id="btnLogin" onClick={this.Login}>Login</button>
                  <button id="btnRegister" onClick={this.Register}>Register</button>
                </div>
     );
   }
 };

export default LoginPage;
