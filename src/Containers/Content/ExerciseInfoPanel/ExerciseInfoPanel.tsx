import React, { Component } from "react"
import "./ExerciseInfoPanel.scss"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { RouteComponentProps, Switch, Route } from "react-router-dom"
import { ChoiceWorkoutAndLevel } from "../../../Components/ChoiceWorkoutAndLevel/ChoiceWorkoutAndLevel"
import { allWorkouts } from "../../../Types/Interfaces/InterfecesList"

interface IDetailProps extends RouteComponentProps {}

interface IDetailState {
  loading: boolean
  userID: string | null
  workoutType: allWorkouts | null
}

export default class ExerciseInfoPanel extends Component<IDetailProps, IDetailState> {
  state = {
    loading: true,
    userID: "-M3vp6tuUSbMLv2sCE91",
    workoutType: null,
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

  render() {
    return (
      <>
        <button
          className="goBackButton"
          onClick={() => {
            this.props.history.goBack()
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="goBackButton__icon" />
        </button>

        <Switch>
          <Route
            path={this.props.match.url}
            component={() => (
              <ChoiceWorkoutAndLevel
                loading={this.state.loading}
                workoutType={this.state.workoutType!}
              />
            )}
          />
        </Switch>
      </>
    )
  }
}
