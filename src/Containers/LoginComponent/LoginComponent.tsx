import React, { Component } from 'react'

import axios from 'axios'
import { Links, MessageType, LocalStorageAuth } from '../../Types/Enums/enumsList'
import { BrowserRouter, Switch, Route, RouteComponentProps } from 'react-router-dom'
import { LoginPage } from '../../Components/Initialization/LoginPage/LoginPage'
import { StyledWrapper, StyledImageWrapper, StyledFormWrapper } from './LoginComponent.styles'
import { RegisterPage } from '../../Components/Initialization/RegisterPage/RegisterPage'
import { LoginData, RegisterData, IdToUid, GoogleData } from '../../Types/Interfaces/InterfecesList'
import { googleKey } from '../../googleApiKey'
import AuthContext from '../../context/auth-context'

import MessageBox from '../../Components/UI/MessageBoxHoc/MessageBox'
import SignUpUsers from '../../Types/Classes/SignUpUsers'

interface IDetailProps extends RouteComponentProps {}

interface IDetailState {
  loading: boolean
  messageType?: {
    text: string
    type: MessageType
  }
}

export default class LoginComponent extends Component<IDetailProps, IDetailState> {
  state = {
    loading: false,
    messageType: { text: '', type: MessageType.GOOD },
    isMessageBoxVisible: false,
  }

  static contextType = AuthContext

  messageToUser = (loadingStatus: boolean, messageType: MessageType, text: string) => {
    this.setState({
      loading: loadingStatus,
      messageType: {
        text: text,
        type: messageType,
      },
    })
  }

  handleLogin = async (values: LoginData) => {
    const valuesToFirebase = {
      email: values.email,
      password: values.password,
      returnSecureToken: true,
    }
    try {
      this.setState({ loading: true })
      let userData = [
        axios
          .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${googleKey.apiKey}`,
            valuesToFirebase
          )
          .then((response) => response.data),
        axios
          .get<IdToUid[]>('https://sportplan-addc3.firebaseio.com/IdToUid.json')
          .then((response) => response.data),
      ]
      const [googleData, idToUidData] = await Promise.all(userData)

      let singleElement: any = Object.values(idToUidData as IdToUid[]).find((item) => {
        if (item.uid === googleData.localId) return true
        return false
      })
      const userDatabaseId = singleElement.id

      const expirationData = new Date(new Date().getTime() + googleData.expiresIn * 1000)
      localStorage.setItem(LocalStorageAuth.TOKEN, googleData.idToken)
      localStorage.setItem(LocalStorageAuth.UID, googleData.localId)
      localStorage.setItem(LocalStorageAuth.DATABASEID, userDatabaseId)
      localStorage.setItem(LocalStorageAuth.EXPTIME, expirationData.toString())

      this.context.handleLogin(userDatabaseId, googleData.localId, googleData.idToken)
    } catch (e) {
      if (e.response) {
        switch (e.response.data.error.message) {
          case 'EMAIL_NOT_FOUND':
            this.messageToUser(false, MessageType.BAD, 'Podany login bądź hasło są nieprawidłowe')
            break
          case 'INVALID_PASSWORD':
            this.messageToUser(false, MessageType.BAD, 'Podany login bądź hasło są nieprawidłowe')
            break
          case 'USER_DISABLED':
            this.messageToUser(
              false,
              MessageType.BAD,
              'Użytkownik został zablokowany przez administratora'
            )
            break
          default:
            this.messageToUser(false, MessageType.BAD, 'Coś poszło nie tak')
        }
      } else {
        this.messageToUser(false, MessageType.BAD, 'Coś poszło nie tak')
      }
    }
  }

  handleRegister = async (values: RegisterData) => {
    this.setState({ loading: true })
    const signInValues = {
      email: values.email,
      password: values.password,
      returnSecureToken: true,
    }
    try {
      const newUser = await axios
        .post<GoogleData>(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${googleKey.apiKey}`,
          signInValues
        )
        .then((response) => response.data)

      const queryToFirebase = `?auth=${newUser.idToken}`

      const newUserInDatabase = SignUpUsers.createUser(values.userName)

      const dataId = await axios
        .post(
          `https://sportplan-addc3.firebaseio.com/Users.json${queryToFirebase}`,
          newUserInDatabase
        )
        .then((response) => response.data.name)

      const connectUidAndDataId = {
        id: dataId,
        uid: newUser.localId,
      }

      await axios.post(
        `https://sportplan-addc3.firebaseio.com/IdToUid.json${queryToFirebase}`,
        connectUidAndDataId
      )
      this.messageToUser(false, MessageType.GOOD, 'Pomyślnie zarejestrowano w bazie danych. Możesz się zalogować!')
    } catch (e) {
      if (e.response) {
        switch (e.response.data.error.message) {
          case 'EMAIL_EXISTS':
            this.messageToUser(false, MessageType.BAD, 'Podany email istnieje w bazie danych')
            break
          case 'TOO_MANY_ATTEMPTS_TRY_LATER':
            this.messageToUser(false, MessageType.BAD, 'Zbyt dużo prób logowania. Spróbuj później')
            break
          default:
            this.messageToUser(false, MessageType.BAD, 'Coś poszło nie tak')
        }
      } else {
        this.messageToUser(false, MessageType.BAD, 'Coś poszło nie tak')
      }
    }
  }

  render() {
    return (
      <StyledWrapper>
        <StyledImageWrapper></StyledImageWrapper>
        <StyledFormWrapper>
          <MessageBox messageType={this.state.messageType} />
          <BrowserRouter>
            <Switch>
              <Route
                path={this.props.match.url}
                component={() => (
                  <LoginPage handleLogin={this.handleLogin} loading={this.state.loading} />
                )}
              />
              <Route
                path={Links.REGISTER}
                component={() => (
                  <RegisterPage handleRegister={this.handleRegister} loading={this.state.loading} />
                )}
              />
            </Switch>
          </BrowserRouter>
        </StyledFormWrapper>
      </StyledWrapper>
    )
  }
}
