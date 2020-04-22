import React, { Component } from 'react'
import './MainPanel.scss'

import axios from 'axios'

import { Container, Row } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import SingleWorkoutManage from '../../../Components/SingleWorkoutManage/SingleWorkoutManage'
import Spinner from '../../../Components/UI/Spinner/Spinner'

export class MainPanel extends Component {

    state = {
        user: null,
        workoutType: null,
        loading: false,
        message: null,
        reRender: false,
        userID: '-M3vp6tuUSbMLv2sCE91'
    }

    constructor(props) {
        super(props)
        this.timeoutExist = null
    }

    componentDidMount() {
        this.setState({ loading: true })
        axios.get(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType.json`)
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

    checkIdName = (id) => {
        let whichWorkout = null;
        switch (id) {
            case 1:
                whichWorkout = "bridge"
                break
            case 2:
                whichWorkout = "legRaising"
                break
            case 3:
                whichWorkout = "pushUps"
                break
            case 4:
                whichWorkout = "pushUpsOnHands"
                break
            case 5:
                whichWorkout = "pullUps"
                break
            case 6:
                whichWorkout = "squads"
                break
            default:
                whichWorkout = null;
        }
        return whichWorkout;
    }

    componentDidUpdate() {
        if (this.state.reRender === true) {
            this.setState({ reRender: false })
            axios.get(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType.json`)
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

    handleConfirmWorkout = (data, undo = false) => {
        let whichWorkout = this.checkIdName(data.id);
        axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, data)
            .then(response => {
                let text = "Zapisano w bazie danych"
                if (undo === true) {
                    text = "Przywrócono dane pomyślnie"
                }
                this.handleMessage(data.id, text, "good")
            })
            .catch(error => {
                this.handleMessage(data.id, "Coś poszło nie tak", "bad")
            })
    }

    handleLvlUpButton = (workout) => {
        const data = {
            level: workout.level,
            numberOfSeries: workout.numberOfSeries,
            quantityInSeries: workout.quantityInSeries,
        }

        const resetData = {
            id: workout.id,
            level: workout.level + 1,
            name: workout.name,
            numberOfSeries: [0],
            quantityInSeries: [0]
        }
        let whichWorkout = this.checkIdName(workout.id)
        let whichLvl = `lvl${workout.level}`
        let whichLvlUp = `lvl${workout.level + 1}`
        this.setState({ loading: true })

        axios.get(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}.json`)
            .then(response => {
                let exist = false
                let backupLvl = null;
                Object.entries(response.data).forEach(item => {
                    if (whichLvlUp === item[0]) {
                        exist = true
                        backupLvl = item[1]
                    }
                })
                if (exist === true) {
                    const oldData = {
                        id: workout.id,
                        level: backupLvl.level,
                        name: workout.name,
                        numberOfSeries: backupLvl.numberOfSeries,
                        quantityInSeries: backupLvl.quantityInSeries
                    }

                    axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, data)
                        .then(response => {
                            axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, oldData)
                                .then(response => {
                                    this.handleMessage(workout.id, "Poziom wyżej(znowu?)!", "good", true)
                                })
                                .catch(error => {
                                    this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
                                })
                        })
                        .catch(error => {
                            this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
                        })
                } else {
                    axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, data)
                        .then(response => {
                            axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, resetData)
                                .then(response2 => {
                                    this.handleMessage(workout.id, "Poziom wyżej!", "good")
                                })
                                .catch(error => {
                                    this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
                                })
                        })
                        .catch(error => {
                            this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
                        })
                }
            })
            .catch(error => {
                this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
            })
        return null
    }

    handleLvlDownButton = (workout) => {
        let newWorkout = { ...workout }
        const whichWorkout = this.checkIdName(workout.id)

        const dataToWrite = {
            level: workout.level,
            numberOfSeries: workout.numberOfSeries,
            quantityInSeries: workout.quantityInSeries,
        }
        let whichLvl = `lvl${workout.level}`

        this.setState({ loading: true })
        axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, dataToWrite)
            .then(response => {
                axios.get(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutTypeHistory.json`)
                    .then(response => {
                        const data = response.data
                        Object.entries(data).forEach(item => {
                            if (item[0] === whichWorkout) {
                                Object.entries(item[1]).forEach(level => {
                                    if (level[0] === `lvl${workout.level - 1}`) {
                                        newWorkout.numberOfSeries = level[1].numberOfSeries
                                        newWorkout.quantityInSeries = level[1].quantityInSeries
                                        newWorkout.level = level[1].level
                                        axios.put(`https://sportplan-addc3.firebaseio.com/Users/${this.state.userID}/workoutType/${whichWorkout}.json`, newWorkout)
                                            .then(response => {
                                                this.handleMessage(workout.id, "Przywrócono poprawnie niższy poziom", "good", true)
                                            })
                                            .catch(error => {
                                                this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
                                            })
                                    }
                                })
                            }
                        })
                    })
                    .catch(error => {
                        this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
                    })
            })
            .catch(error => {
                this.handleMessage(workout.id, "Coś poszło nie tak", "bad")
            })
    }

    handleMessage = (id, text, type, reRender = false) => {
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
            show = Object.values(this.state.workoutType).map(item => {
                return (
                    <SingleWorkoutManage
                        key={item.id}
                        workout={item}
                        message={this.state.message}
                        handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)}
                        handleLvlDownButton={(id) => this.handleLvlDownButton(id)}
                        handleMessage={(id, text, type) => this.handleMessage(id, text, type)}
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

export default MainPanel
