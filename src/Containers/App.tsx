import React, { Component } from 'react'
import './App.scss'

import { Route, Switch, Redirect, BrowserRouter, RouteComponentProps } from 'react-router-dom'

import Content from './Content/Content'
import { Links } from '../Types/Enums/enumsList'
import LoginComponent from './LoginComponent/LoginComponent'


interface IDetailProps extends RouteComponentProps {

}

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={Links.LOGIN} component={LoginComponent} />
          <Route path={Links.APP} component={Content} />
          <Redirect path="/" to={Links.LOGIN} />
        </Switch >
      </BrowserRouter>
    );
  }
}