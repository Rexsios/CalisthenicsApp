import React, { Component } from "react"

import axios from "axios"
import WorkoutMethods from "../../Types/Classes/WorkoutMethods"
import { WhichWorkout, Links } from "../../Types/Enums/enumsList"
import { BrowserRouter, Switch, Route, RouteComponentProps, Redirect } from "react-router-dom"
import { LoginPage } from "../../Components/Initialization/LoginPage/LoginPage"
import { StyledWrapper, StyledImageWrapper, StyledFormWrapper } from "./LoginComponent.styles"
import { RegisterPage } from "../../Components/Initialization/RegisterPage/RegisterPage"

interface IDetailProps extends RouteComponentProps {}

export default class LoginComponent extends Component<IDetailProps> {
  state = {
    redirect: false,
  }

  handleRedirectToApp = () => {
    this.setState({ redirect: true })
  }
  createUser = () => {
    const user = {
      name: "Slawko",
      surname: "Palka",
      password: "123",
      workoutType: {
        bridge: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.BRIDGE,
          1,
          "Mostek",
          [0, 0],
          [0, 0]
        ),
        legRaising: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.LEGRAISING,
          1,
          "Unoszenie nóg",
          [0, 0],
          [0, 0]
        ),
        pushUps: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PUSHUPS,
          1,
          "Pompki",
          [0, 0],
          [0, 0]
        ),
        pushUpsOnHands: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PUSHUPSONHANDS,
          1,
          "Pompki na rękach",
          [0, 0],
          [0, 0]
        ),
        pullUps: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.PULLUPS,
          1,
          "Podciąganie",
          [0, 0],
          [0, 0]
        ),
        squads: WorkoutMethods.createSingleWorkoutObject(
          WhichWorkout.SQUADS,
          1,
          "Przysiady",
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
    axios.post("https://sportplan-addc3.firebaseio.com/Users.json", user)
  }

  render() {
    if (this.state.redirect) return <Redirect to={Links.APP} />
    return (
      <StyledWrapper>
        <StyledImageWrapper></StyledImageWrapper>
        <StyledFormWrapper>
          <BrowserRouter>
            <Switch>
              <Route
                path={this.props.match.url}
                component={() => <LoginPage handleRedirectToApp={this.handleRedirectToApp} />}
              />
              <Route
                path={Links.REGISTER}
                component={() => <RegisterPage handleRedirectToApp={this.handleRedirectToApp} />}
              />
            </Switch>
          </BrowserRouter>
        </StyledFormWrapper>
      </StyledWrapper>
    )
  }
}
