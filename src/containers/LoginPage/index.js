import React, { Component } from 'react';
import '../../css/LoginPage.css';
import Sidebar from 'react-sidebar';

import RegisterPage from '../RegisterPage';
import SearchPage from '../SearchPage';
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
 class LoginPage extends React.Component {
   constructor(props) {
     super(props);

     this.state = {

     }
     this.btnLogin = this.btnLogin.bind(this);
     this.btnRegister = this.btnRegister.bind(this);
   }
      btnLogin() {
        ReactDOM.render(
         <App>
           <SearchPage />
         </App>
         , document.getElementById('root')
        );
      }
         btnRegister() {
           ReactDOM.render(
            <App>
              <RegisterPage />
            </App>
            , document.getElementById('root')
           );
         }

   render() {
     return (
                <div>
                  <b id="txtTitle">Login Page</b>
                  <br />
                  <br />
                  <br />
                  <br />
                  <b id="txtEmail">Enter Email: </b>
                  <input id="inputEmail" className="inputEmail" maxLength="80" ref={ input => this._inputEmail = input } />
                  <br />
                  <br />
                  <br />
                  <b id="txtPassword">Enter Password: </b>
                  <input id="inputPassword" className="inputPassword" maxLength="80" ref={ input => this._inputPassword = input } />
                  <br />
                  <br />
                  <br />
                  <br />
                  <button id="btnLogin" onClick={this.btnLogin}>Login</button>
                  <button id="btnRegister" onClick={this.btnRegister}>Register</button>
                </div>
     );
   }
 };

export default LoginPage;
