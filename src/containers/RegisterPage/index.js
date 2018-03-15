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
     this.btnCreateAccount = this.btnCreateAccount.bind(this);
   }
      btnCreateAccount() {
        //TODO
      }

   render() {
     return (
                <div>
                  <b id="txtTitle">Register Page</b>
                  <br />
                  <br />
                  <br />
                  <br />
                  <b id="txtEmail">Enter Email: </b>
                  <input id="inputEmail" className="inputEmail" maxLength="80" ref={ input => this._inputEmail = input } />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <b id="txtPassword">Enter Password: </b>
                  <input id="inputPassword" className="inputPassword" maxLength="80" ref={ input => this._inputPassword = input } />
                  <br />
                  <br />
                  <br />
                  <b id="txtConfirmPassword">Confirm Password: </b>
                  <input id="inputConfirmPassword" className="inputConfirmPassword" maxLength="80" ref={ input => this._inputConfirmPassword = input } />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button id="btnCreateAccount" onClick={this.btnCreateAccount}>Create Account</button>
                </div>
     );
   }
 };

export default RegisterPage;
