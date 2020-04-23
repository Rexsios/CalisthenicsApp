import React, { Component } from 'react'
import './App.scss'

import { Route, Switch, Redirect, BrowserRouter, RouteComponentProps } from 'react-router-dom'

import { Content } from './Content/Content'
import { LoginPage } from './LoginPage/LoginPage'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/aplikacja" component={Content} />
          <Redirect path="/" to="/aplikacja" />
        </Switch >
      </BrowserRouter>
    );
  }
}

interface IDetailProps extends RouteComponentProps {

}

export default App;
