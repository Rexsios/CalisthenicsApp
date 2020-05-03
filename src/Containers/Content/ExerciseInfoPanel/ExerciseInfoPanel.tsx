import React, { Component } from "react"
import "./ExerciseInfoPanel.scss"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { RouteComponentProps, Switch, Route, Redirect } from "react-router-dom"
import { ChoiceWorkoutAndLevel } from "../../../Components/ChoiceWorkoutAndLevel/ChoiceWorkoutAndLevel"
import { allWorkouts, singleWorkout } from "../../../Types/Interfaces/InterfecesList"
import { WhichWorkout, Links } from "../../../Types/Enums/enumsList"
import { ChoosenWorkoutInfo } from "../../../Components/ChoosenWorkoutInfo/ChoosenWorkoutInfo"
import WorkoutMethods from "../../../Types/Classes/WorkoutMethods"

interface IDetailProps extends RouteComponentProps {}

interface IDetailState {
  loading: boolean
  userID: string | null
  workoutType: allWorkouts | null
  redirect: boolean | null
  whichWorkUrl: string | null
  singleWorkout: singleWorkout | null
}

export default class ExerciseInfoPanel extends Component<IDetailProps, IDetailState> {
  state = {
    loading: true,
    userID: "-M3vp6tuUSbMLv2sCE91",
    workoutType: null,
    redirect: null,
    whichWorkUrl: null,
    singleWorkout: null,
  }

  componentDidMount() {
    axios
      .get<allWorkouts>(
        `https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType.json`
      )
      .then((response) => {
        this.setState({
          workoutType: response.data,
          loading: false,
        })
      })
      .catch((error) => {
        this.setState({
          loading: false,
        })
      })
  }

  handleExactWorkout = (id: WhichWorkout, lvl: number, title: string) => {
    this.setState({
      loading: true,
      redirect: true,
      whichWorkUrl: `/${WorkoutMethods.checkIdName(id)}`,
      singleWorkout: WorkoutMethods.createSingleWorkoutObject(id, lvl, title),
    })
  }

  render() {
    let redirect = null
    if (this.state.redirect) {
      redirect = <Redirect to={this.props.match.url + this.state.whichWorkUrl} />
    }
    return (
      <>
        <Switch>
          <Route
            path={this.props.match.url + this.state.whichWorkUrl}
            component={() => (
              <>
                <button
                  className="goBackButton"
                  onClick={() => {
                    this.setState({ loading: false, redirect: false })
                    this.props.history.push(this.props.match.url)
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="goBackButton__icon" />
                </button>
                <ChoosenWorkoutInfo singleWorkout={this.state.singleWorkout!} />
              </>
            )}
          />

          <Route
            path={this.props.match.url}
            component={() => (
              <>
                <button
                  className="goBackButton"
                  onClick={() => {
                    this.props.history.push(Links.APP)
                  }}
                >
                  <FontAwesomeIcon icon={faArrowLeft} className="goBackButton__icon" />
                </button>

                <ChoiceWorkoutAndLevel
                  loading={this.state.loading}
                  workoutType={this.state.workoutType!}
                  handleExactWorkout={this.handleExactWorkout}
                />
              </>
            )}
          />
        </Switch>

        {redirect}
      </>
    )
  }
}
