import React, { Component } from 'react'
import './App.scss'

import { Route, Switch, Redirect } from 'react-router-dom'

import { Content } from './Content/Content'
import { LoginPage } from './LoginPage/LoginPage'


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/aplikacja" component={Content} />
        <Redirect path="/" to="/aplikacja" />
      </Switch >
    );
  }
}

export default App;
