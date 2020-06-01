import React, { Component } from 'react'

import axios from 'axios'
import WorkoutMethods from '../../Types/Classes/WorkoutMethods'
import { WhichWorkout, Links, MessageType, LocalStorageAuth } from '../../Types/Enums/enumsList'
import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom'
import { LoginPage } from '../../Components/Initialization/LoginPage/LoginPage'
import { StyledWrapper, StyledImageWrapper, StyledFormWrapper } from './LoginComponent.styles'
import { RegisterPage } from '../../Components/Initialization/RegisterPage/RegisterPage'
import { LoginData, RegisterData, IdToUid } from '../../Types/Interfaces/InterfecesList'
import { googleKey } from '../../googleApiKey'
import AuthContext from '../../context/auth-context'

import MessageBox from '../../Components/UI/MessageBoxHoc/MessageBox'

interface IDetailProps extends RouteComponentProps {}

interface IDetailState {
  redirect: boolean
  loading: boolean
  messageType?: {
    text: string
    type: MessageType
  }
}

export default class LoginComponent extends Component<IDetailProps, IDetailState> {
  state = {
    redirect: false,
    loading: false,
    messageType: { text: '', type: MessageType.GOOD },
    isMessageBoxVisible: false,
  }

  static contextType = AuthContext

  handleRedirectToApp = () => {
    this.setState({ redirect: true })
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
          .get<IdToUid>('https://sportplan-addc3.firebaseio.com/IdToUid.json')
          .then((response) => response.data),
      ]
      const [googleData, idToUidData] = await Promise.all(userData)

      let singleElement = idToUidData.find((item: IdToUid) => {
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
      if (e.response.status === 400) {
        this.setState({
          loading: false,
          messageType: { type: MessageType.BAD, text: 'Błędny login bądź hasło' },
        })
      } else {
        this.setState({
          loading: false,
          messageType: { type: MessageType.BAD, text: 'Coś poszło nie tak' },
        })
      }
    }
  }

  handleRegister = (values: RegisterData) => {
    //this.setState({ redirect: true })
  }
  createUser = () => {
    const user = {
      name: 'Slawko',
      surname: 'Palka',
      password: '123',
      workoutType: {
        bridge: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.BRIDGE,
          1,
          'Mostek',
          [0, 0],
          [0, 0]
        ),
        legRaising: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.LEGRAISING,
          1,
          'Unoszenie nóg',
          [0, 0],
          [0, 0]
        ),
        pushUps: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PUSHUPS,
          1,
          'Pompki',
          [0, 0],
          [0, 0]
        ),
        pushUpsOnHands: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PUSHUPSONHANDS,
          1,
          'Pompki na rękach',
          [0, 0],
          [0, 0]
        ),
        pullUps: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PULLUPS,
          1,
          'Podciąganie',
          [0, 0],
          [0, 0]
        ),
        squads: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.SQUADS,
          1,
          'Przysiady',
          [0, 0],
          [0, 0]
        ),
      },
      workoutTypeHistory: {
        bridge: {
          id: WhichWorkout.BRIDGE,
        },
        legRaising: {
          id: WhichWorkout.LEGRAISING,
        },
        pushUps: {
          id: WhichWorkout.PUSHUPS,
        },
        pushUpsOnHands: {
          id: WhichWorkout.PUSHUPSONHANDS,
        },
        pullUps: {
          id: WhichWorkout.PULLUPS,
        },
        squads: {
          id: WhichWorkout.SQUADS,
        },
      },
    }
    axios.post('https://sportplan-addc3.firebaseio.com/Users.json', user)
  }

  render() {
    if (this.state.redirect) return <Redirect to={Links.APP} />
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
