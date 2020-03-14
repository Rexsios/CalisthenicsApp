import React from 'react'
import './App.scss'

import { Route, Switch } from 'react-router-dom'

import { Content } from './Content/Content'
import { LoginPage } from './LoginPage/LoginPage'


function App() {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/" component={Content} />
    </Switch>
  );
}

export default App;
