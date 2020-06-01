import React, { Component } from 'react'
import './App.scss'

import { Route, Switch, Redirect, BrowserRouter, RouteComponentProps } from 'react-router-dom'

import Content from './Content/Content'
import { Links } from '../Types/Enums/enumsList'
import LoginComponent from './LoginComponent/LoginComponent'
import AuthContext from '../context/auth-context'

interface IDetailProps extends RouteComponentProps {}

interface IDetailState {
  isAuth?: boolean
}

export default class App extends Component<IDetailState> {
  state = {
    isAuth: false,
    userDatabaseId: null,
    userUid: null,
    userToken: null,
  }

  handleLogin = (userDatabaseId: string, userUid: string, userToken: null) => {
    this.setState({
      isAuth: true,
      userDatabaseId: userDatabaseId,
      userUid: userUid,
      userToken: userToken,
    })
  }

  handleLogout = () => {
    this.setState({
      isAuth: false,
      userDatabaseId: null,
      userUid: null,
      userToken: null,
    })
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          userDatabaseId: this.state.userDatabaseId,
          userUid: this.state.userUid,
          userToken: this.state.userToken,
          userAuthQuery: `?auth=${this.state.userToken}`,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
        }}
      >
        <BrowserRouter>
          <Switch>
            {this.state.isAuth ? <Route path={Links.APP} component={Content} /> : null}
            <Route path={Links.LOGIN} component={LoginComponent} />
            <Redirect path="/" to={Links.LOGIN} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }
}
