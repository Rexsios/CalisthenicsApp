import React from 'react'
import './MainPanel.scss'

import axios from 'axios'

import { Container, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { RouteComponentProps } from 'react-router-dom'

import SingleWorkoutManage from '../../../Components/SingleWorkoutManage/SingleWorkoutManage'
import Spinner from '../../../Components/UI/Spinner/Spinner'

//Types
//interfaces
import { singleWorkout, singleHistoryWorkout, allWorkouts, allHistoryWorkouts } from '../../../Types/Interfaces/InterfecesList'
//enums
import { MessageType } from '../../../Types/Enums/enumsList'
//classes
import WorkoutMethods from '../../../Types/Classes/WorkoutMethods'

interface IDetailProps extends RouteComponentProps {

}

interface IDetailState {
    user: string | null,
    workoutType: allWorkouts | null,
    loading: boolean,
    message: {
        id: number,
        text: string,
        type: MessageType,
    } | null,
    reRender: boolean,
    userID: string | null
}

export default class MainPanel extends React.Component<IDetailProps, IDetailState>  {

    state = {
        user: null,
        workoutType: null,
        loading: false,
        message: null,
        reRender: false,
        userID: '-M3vp6tuUSbMLv2sCE91'
    }
    private timeoutExist: any | null

    constructor(props: any) {
        super(props)
        this.timeoutExist = null
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get<allWorkouts>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType.json`)
            .then(response => {
                this.setState({
                    workoutType: response.data,
                    loading: false,
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }

    componentDidUpdate() {
        if (this.state.reRender === true) {
            this.setState({ reRender: false })
            axios.get<allWorkouts>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType.json`)
                .then(response => {
                    this.setState({
                        workoutType: response.data,
                        loading: false
                    })
                })
                .catch(error => {
                    this.setState({
                        loading: false
                    })
                })
        }
    }

    handleConfirmWorkout = (data: singleWorkout, undo: boolean = false) => {
        let whichWorkout = WorkoutMethods.checkIdName(data.id);
        if (whichWorkout !== null) {
            axios.put<singleWorkout>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, data)
                .then(response => {
                    let text = "Zapisano w bazie danych"
                    if (undo === true) {
                        text = "Przywrócono dane pomyślnie"
                    }
                    this.handleMessage(data.id, text, MessageType.GOOD)
                })
                .catch(error => {
                    this.handleMessage(data.id, "Coś poszło nie tak", MessageType.BAD)
                })
        } else {
            this.handleMessage(data.id, "Coś poszło nie tak", MessageType.BAD)
        }
    }

    handleLvlUpButton = (workout: singleWorkout) => {

        const data = WorkoutMethods.createSingleHistoryWorkoutObject(workout.level, workout.numberOfSeries, workout.quantityInSeries)

        const resetData: singleWorkout = WorkoutMethods.createSingleWorkoutObject(workout.id, workout.level + 1, workout.name, [0], [0])

        const whichWorkout = WorkoutMethods.checkIdName(workout.id)
        const whichLvl = `lvl${workout.level}`
        const whichLvlUp = `lvl${workout.level + 1}`
        this.setState({ loading: true })

        axios.get(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}.json`)
            .then(response => {
                let exist: boolean | null = null
                let backupLvl: singleHistoryWorkout | null = WorkoutMethods.createSingleHistoryWorkoutObject(1, [0], [0])
                //I didnt find better solution :C

                Object.entries(response.data).forEach(item => {
                    if (whichLvlUp !== item[0]) {
                        exist = false
                        backupLvl = null
                    } else {
                        exist = true
                        backupLvl = item[1] as singleHistoryWorkout
                    }
                })

                if (exist === true && backupLvl !== null) {

                    const oldData = WorkoutMethods.createSingleWorkoutObject(workout.id, backupLvl.level, workout.name, backupLvl.numberOfSeries, backupLvl.quantityInSeries)

                    axios.put<singleHistoryWorkout>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, data)
                        .then(response => {
                            axios.put<singleWorkout>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, oldData)
                                .then(response => {
                                    this.handleMessage(workout.id, "Poziom wyżej(znowu?)!", MessageType.GOOD, true)
                                })
                                .catch(error => {
                                    this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
                                })
                        })
                        .catch(error => {
                            this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
                        })
                } else {
                    axios.put<singleHistoryWorkout>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, data)
                        .then(response => {
                            axios.put<singleWorkout>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, resetData)
                                .then(response2 => {
                                    this.handleMessage(workout.id, "Poziom wyżej!", MessageType.GOOD, true)
                                })
                                .catch(error => {
                                    this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
                                })
                        })
                        .catch(error => {
                            this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
                        })
                }
            })
            .catch(error => {
                this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
            })
        return null
    }

    handleLvlDownButton = (workout: singleWorkout) => {
        let newWorkout: singleWorkout = { ...workout }
        const whichWorkout = WorkoutMethods.checkIdName(workout.id)

        const dataToWrite: singleHistoryWorkout = WorkoutMethods.createSingleHistoryWorkoutObject(workout.level, workout.numberOfSeries, workout.quantityInSeries)
        let whichLvl = `lvl${workout.level}`

        this.setState({ loading: true })

        axios.put<singleHistoryWorkout>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, dataToWrite)
            .then(response => {
                axios.get<allHistoryWorkouts>(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory.json`)
                    .then(response => {
                        const data: allHistoryWorkouts = response.data
                        Object.entries(data).forEach(item => {
                            if (item[0] === whichWorkout) {
                                Object.entries(item[1] as singleHistoryWorkout).forEach(level => {
                                    if (level[0] === `lvl${workout.level - 1}`) {
                                        newWorkout.numberOfSeries = level[1].numberOfSeries
                                        newWorkout.quantityInSeries = level[1].quantityInSeries
                                        newWorkout.level = level[1].level
                                        axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, newWorkout)
                                            .then(response => {
                                                this.handleMessage(workout.id, "Przywrócono poprawnie niższy poziom", MessageType.GOOD, true)
                                            })
                                            .catch(error => {
                                                this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
                                            })
                                    }
                                })
                            }
                        })
                    })
                    .catch(error => {
                        this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
                    })
            })
            .catch(error => {
                this.handleMessage(workout.id, "Coś poszło nie tak", MessageType.BAD)
            })
    }

    handleMessage = (id: number, text: string, type: MessageType, reRender: boolean = false) => {
        this.setState({
            message: {
                id: id,
                text: text,
                type: type,
            },
            reRender: reRender
        })
        if (this.timeoutExist !== null) {
            clearTimeout(this.timeoutExist)
        }
        this.timeoutExist = setTimeout(() => {
            this.setState({ message: null })
        }, 3000)
    }

    render() {
        let show = null
        if (this.state.workoutType !== null && this.state.loading === false) {
            show = Object.values(this.state.workoutType! as allWorkouts).map(item => {
                return (
                    <SingleWorkoutManage
                        key={item.id}
                        workout={item}
                        message={this.state.message}
                        handleConfirmButton={this.handleConfirmWorkout}
                        handleLvlUpButton={this.handleLvlUpButton}
                        handleLvlDownButton={this.handleLvlDownButton}
                        handleMessage={this.handleMessage}
                    />
                )
            })
        }
        if (this.state.loading === true) {
            show = (
                <Spinner></Spinner>
            )
        }
        return (
            <>
                <button className="workout__goBackButton" onClick={() => { this.props.history.goBack() }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="workout__goBackButton__icon" />
                </button>
                <Container className="workout" >
                    <Row>
                        {show}
                    </Row>
                </Container>
            </>
        )
    }
}
