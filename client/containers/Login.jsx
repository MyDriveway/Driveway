import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  loggedIn: store.login.loggedIn
})

const mapDispatchToProps = dispatch => ({
  setLogin: (bool) => dispatch(actions.setLogin(bool))
})

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
  }

  login(e) {
    e.preventDefault();
    const username = document.getElementById('username-login');
    const password = document.getElementById('password-login');
    
    if (username && username.value !== '' && password && password.value !== '') {
      const newLogin = {
        username: username.value,
        password: password.value
      }

      fetch('/login', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(newLogin)
      }).then(response => {
        if (response.status === 200) this.props.setLogin(true);
        else {
          username.value = '';
          password.value = '';
        }
      }).catch(err => {
        console.log(err);
      })
    }
  }

  signup(e) {
    e.preventDefault();
    const username = document.getElementById('username-signup');
    const password = document.getElementById('password-signup');

    if (username && username.value !== '' && password && password.value !== '') {
      const newSignup = {
        username: username.value,
        password: password.value
      }

      fetch('/signup', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(newSignup)
      }).then(response => {
        this.props.setLogin(true);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  render() {
    return (
      <div>
        <div style={{'display': 'inline-block', 'margin': '0px 10px'}}>
          <h1 style={{"color": "#236A62"}}>Login</h1><br />
          <input id='username-login' type='text' placeholder='Username' /><br />
          <input id='password-login' type='text' placeholder='Password' /><br />
          <button onClick={this.login}>Login</button><br />
        </div>

        <div style={{'display': 'inline-block', 'margin': '0px 10px'}}>
          <h1 style={{"color": "#236A62"}}>Sign Up</h1><br />
          <input id='username-signup' type='text' placeholder='Username' /><br />
          <input id='password-signup' type='text' placeholder='Password' /><br />
          <button onClick={this.signup}>Login</button><br />
        </div>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);