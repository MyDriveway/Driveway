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
  }

  login(e) {
    e.preventDefault();
    // const that = this;
    // console.log(that);
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    
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
        this.props.setLogin(true);
        console.log(response);
      }).catch(err => {
        console.log(err);
      })
    }
  }

  render() {
    return (
      <div>
        <h1 style={{"color": "#236A62"}}>Login</h1><br />
        <input id='username' type='text' placeholder='Username' /><br />
        <input id='password' type='text' placeholder='Password' /><br />
        <button onClick={this.login}>Login</button><br />
        <p>Not a user? <a href=''>Sign up</a></p>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);