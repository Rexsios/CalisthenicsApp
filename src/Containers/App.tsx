import React, { Component } from 'react'
import './App.scss'

import { Route, Switch, Redirect, BrowserRouter, RouteComponentProps } from 'react-router-dom'

import Content from './Content/Content'
import { Links, LocalStorageAuth } from '../Types/Enums/enumsList'
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

  componentDidMount() {
    this.AuthWithLocalStorage()
  }

  handleLogin = (userDatabaseId: string, userUid: string, userToken: string) => {
    this.setState({
      isAuth: true,
      userDatabaseId: userDatabaseId,
      userUid: userUid,
      userToken: userToken,
    })
  }

  handleLogout = () => {
    localStorage.removeItem(LocalStorageAuth.TOKEN)
    localStorage.removeItem(LocalStorageAuth.UID)
    localStorage.removeItem(LocalStorageAuth.DATABASEID)
    localStorage.removeItem(LocalStorageAuth.EXPTIME)

    this.setState({
      isAuth: false,
      userDatabaseId: null,
      userUid: null,
      userToken: null,
    })
  }

  AuthWithLocalStorage = () => {
    const userToken = localStorage.getItem(LocalStorageAuth.TOKEN)
    if (!userToken) {
      this.handleLogout()
    } else {
      const expTime = localStorage.getItem(LocalStorageAuth.EXPTIME)
      if (expTime) {
        const expData = new Date(expTime)
        if (expData > new Date()) {
          const databaseId = localStorage.getItem(LocalStorageAuth.DATABASEID)
          const userUid = localStorage.getItem(LocalStorageAuth.UID)
          if (databaseId && userUid) {
            this.handleLogin(databaseId, userUid, userToken)
          }
        } else {
          this.handleLogout()
        }
      }
    }
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
            {this.state.isAuth ? (
              <>
                <Route path={Links.APP} component={Content} />
                <Redirect path="/" to={Links.APP} />
              </>
            ) : (
              <>
                <Route path={Links.LOGIN} component={LoginComponent} />
                <Redirect path="/" to={Links.LOGIN} />
              </>
            )}
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }
}
