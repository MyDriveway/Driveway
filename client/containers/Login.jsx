import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions/actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login(e) {
    e.preventDefault();
    console.log('hey');
  }

  render() {
    return (
      <div>
        <h1 style={{"color": "#236A62"}}>Login</h1><br />
        <input type='text' placeholder='Username' /><br />
        <input type='text' placeholder='Password' /><br />
        <button onClick={this.login}>Login</button><br />
        <p>Not a user? <a href=''>Sign up</a></p>
      </div>
    )
  }
}

export default Login;