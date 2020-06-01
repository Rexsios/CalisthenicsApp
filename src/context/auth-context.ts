import React from 'react'

const authContext = React.createContext({
  isAuth: false,
  userDatabaseId: null,
  userUid: null,
  userToken: null,
  userAuthQuery: '',
  handleLogin: (userDatabaseId: string, userUid: string, userToken: null) => {},
  handleLogout: () => {}
})

export default authContext
