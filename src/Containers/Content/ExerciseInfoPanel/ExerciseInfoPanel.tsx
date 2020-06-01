import React, { Component } from "react"
import "./ExerciseInfoPanel.scss"
import axios from "axios"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { RouteComponentProps, Switch, Route, Redirect } from "react-router-dom"
import { ChoiceWorkoutAndLevel } from "../../../Components/ChoiceWorkoutAndLevel/ChoiceWorkoutAndLevel"
import { allWorkouts, singleWorkout, WorkoutData } from "../../../Types/Interfaces/InterfecesList"
import { WhichWorkout, Links } from "../../../Types/Enums/enumsList"
import { ChoosenWorkoutInfo } from "../../../Components/ChoosenWorkoutInfo/ChoosenWorkoutInfo"
import WorkoutMethods from "../../../Types/Classes/WorkoutMethods"
import ContextAuth from '../../../context/auth-context'

import { storage } from "../../../firebase.config"

interface IDetailProps extends RouteComponentProps {}

interface IDetailState {
  loading: boolean
  workoutType: allWorkouts | null
  redirect: boolean | null
  whichWorkUrl: string | null
  singleWorkout: singleWorkout | null
  achiveLvl: number | null
  workoutDataInfo: WorkoutData | null
  photoUrls: string[]
}

export default class ExerciseInfoPanel extends Component<IDetailProps, IDetailState> {
  state = {
    loading: true,
    workoutType: null,
    redirect: null,
    whichWorkUrl: null,
    singleWorkout: null,
    achiveLvl: null,
    workoutDataInfo: null,
    photoUrls: ["", ""],
  }

  static contextType = ContextAuth

  componentDidMount() {
    axios
      .get<allWorkouts>(
        `https://sportplan-addc3.firebaseio.com/Users/${this.context.userDatabaseId}/workoutType.json${this.context.userAuthQuery}`
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

  handleExactWorkout = (id: WhichWorkout, lvl: number, title: string, achiveLvl: number) => {
    this.setState({
      loading: true,
      redirect: true,
      whichWorkUrl: `/${WorkoutMethods.checkIdName(id)}`,
      singleWorkout: WorkoutMethods.createSingleWorkoutObject(id, lvl, title),
      achiveLvl: achiveLvl,
    })

    const adresURL = `https://sportplan-addc3.firebaseio.com/WorkoutsData/${WorkoutMethods.checkIdName(
      id
    )}/lvl${lvl}.json`

    axios
      .get<WorkoutData>(adresURL)
      .then((response) => {
        storage
          .ref(`${WorkoutMethods.checkIdName(id)}/lvl${lvl}`)
          .child("photo1kon.png")
          .getDownloadURL()
          .then((url1) => {
            storage
              .ref(`${WorkoutMethods.checkIdName(id)}/lvl${lvl}`)
              .child("photo2kon.png")
              .getDownloadURL()
              .then((url2) => {
                this.setState({
                  photoUrls: [url1, url2],
                  workoutDataInfo: response.data,
                  loading: false,
                })
              })
              .catch((error) => {
                this.setState({
                  loading: false,
                })
              })
          })
          .catch((error) => {
            this.setState({
              loading: false,
            })
          })
      })
      .catch((error) => {
        this.setState({
          loading: false,
        })
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
                <ChoosenWorkoutInfo
                  loading={this.state.loading}
                  workoutDataInfo={this.state.workoutDataInfo}
                  singleWorkout={this.state.singleWorkout!}
                  achiveLvl={this.state.achiveLvl!}
                  handleExactWorkout={this.handleExactWorkout}
                  photosUrl={this.state.photoUrls}
                />
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
