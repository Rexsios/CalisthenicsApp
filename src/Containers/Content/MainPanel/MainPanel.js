import React, { Component } from 'react'
import './MainPanel.scss'

import axios from 'axios'

import { Container, Row } from 'react-bootstrap'


import SingleWorkoutManage from '../../../Components/SingleWorkoutManage/SingleWorkoutManage'
import Spinner from '../../../Components/UI/Spinner/Spinner'

export class MainPanel extends Component {

    state = {
        user: null,
        workoutType: null,
        loading: false,
        message: null,
        reRender: false
    }

    componentDidMount() {

        this.setState({ loading: true })
        axios.get('https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType.json')
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
            axios.get('https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType.json')
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
        axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType/${whichWorkout}.json`, data)
            .then(response => {
                let text = "Zapisano w bazie danych"
                if (undo === true) {
                    text = "Przywrócono dane pomyślnie"
                }
                this.setState({
                    message: {
                        id: data.id,
                        text: text,
                        type: "good"
                    }
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
            })
            .catch(error => {
                this.setState({
                    message: {
                        id: data.id,
                        text: "Coś poszło nie tak",
                        type: "bad"
                    }
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
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

        axios.get(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutTypeHistory/${whichWorkout}.json`)
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


                    axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, data)
                        .then(response => {
                            axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType/${whichWorkout}.json`, oldData)
                                .then(response => {
                                    this.setState({
                                        message: {
                                            id: workout.id,
                                            text: "Poziom wyżej(znowu?)!",
                                            type: "good",
                                        },
                                        reRender: true
                                    })
                                    setTimeout(() => {
                                        this.setState({ message: null })
                                    }, 3000)
                                })
                                .catch(error => {
                                    this.setState({
                                        message: {
                                            id: data.id,
                                            text: "Coś poszło nie tak",
                                            type: "bad"
                                        }
                                    })
                                    setTimeout(() => {
                                        this.setState({ message: null })
                                    }, 3000)
                                })
                        })
                        .catch(error => {
                            this.setState({
                                message: {
                                    id: data.id,
                                    text: "Coś poszło nie tak",
                                    type: "bad"
                                }
                            })
                            setTimeout(() => {
                                this.setState({ message: null })
                            }, 3000)
                        })
                } else {
                    axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, data)
                        .then(response => {
                            axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType/${whichWorkout}.json`, resetData)
                                .then(response2 => {
                                    this.setState({
                                        message: {
                                            id: workout.id,
                                            text: "Poziom wyżej!",
                                            type: "good",
                                        },
                                        reRender: true
                                    })
                                    setTimeout(() => {
                                        this.setState({ message: null })
                                    }, 3000)
                                })
                                .catch(error => {
                                    this.setState({
                                        message: {
                                            id: data.id,
                                            text: "Coś poszło nie tak",
                                            type: "bad"
                                        }
                                    })
                                    setTimeout(() => {
                                        this.setState({ message: null })
                                    }, 3000)
                                })
                        })
                        .catch(error => {
                            this.setState({
                                message: {
                                    id: data.id,
                                    text: "Coś poszło nie tak",
                                    type: "bad"
                                }
                            })
                            setTimeout(() => {
                                this.setState({ message: null })
                            }, 3000)
                        })
                }
            })
            .catch(error => {
                this.setState({
                    message: {
                        id: data.id,
                        text: "Coś poszło nie tak",
                        type: "bad"
                    }
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
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
        axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutTypeHistory/${whichWorkout}/${whichLvl}.json`, dataToWrite)
            .then(response => {
                axios.get('https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutTypeHistory.json')
                    .then(response => {
                        const data = response.data
                        Object.entries(data).forEach(item => {
                            if (item[0] === whichWorkout) {
                                Object.entries(item[1]).forEach(level => {
                                    if (level[0] === `lvl${workout.level - 1}`) {
                                        newWorkout.numberOfSeries = level[1].numberOfSeries
                                        newWorkout.quantityInSeries = level[1].quantityInSeries
                                        newWorkout.level = level[1].level
                                        axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType/${whichWorkout}.json`, newWorkout)
                                            .then(response => {
                                                this.setState({
                                                    message: {
                                                        id: workout.id,
                                                        text: "Przywrócono poprawnie niższy poziom",
                                                        type: "good",
                                                    },
                                                    reRender: true
                                                })
                                                setTimeout(() => {
                                                    this.setState({ message: null })
                                                }, 3000)
                                            })
                                            .catch(error => {
                                                this.setState({
                                                    message: {
                                                        id: workout.id,
                                                        text: "Coś poszło nie tak",
                                                        type: "bad"
                                                    }
                                                })
                                                setTimeout(() => {
                                                    this.setState({ message: null })
                                                }, 3000)
                                            })
                                    }
                                })
                            }
                        })
                    })
            })
            .catch(error => {
                this.setState({
                    message: {
                        id: workout.id,
                        text: "Coś poszło nie tak",
                        type: "bad"
                    }
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
            })
    }

    render() {
        let show = null;
        if (this.state.workoutType !== null && this.state.loading === false) {
            let { bridge, legRaising, pushUps, pushUpsOnHands, pullUps, squads } = { ...this.state.workoutType }
            show = (
                <>
                    <SingleWorkoutManage workout={bridge} message={this.state.message} handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)} handleLvlDownButton={(id) => this.handleLvlDownButton(id)} />
                    <SingleWorkoutManage workout={legRaising} message={this.state.message} handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)} handleLvlDownButton={(id) => this.handleLvlDownButton(id)} />
                    <SingleWorkoutManage workout={pushUps} message={this.state.message} handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)} handleLvlDownButton={(id) => this.handleLvlDownButton(id)} />
                    <SingleWorkoutManage workout={pushUpsOnHands} message={this.state.message} handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)} handleLvlDownButton={(id) => this.handleLvlDownButton(id)} />
                    <SingleWorkoutManage workout={pullUps} message={this.state.message} handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)} handleLvlDownButton={(id) => this.handleLvlDownButton(id)} />
                    <SingleWorkoutManage workout={squads} message={this.state.message} handleConfirmButton={(data, undo) => this.handleConfirmWorkout(data, undo)}
                        handleLvlUpButton={(workout) => this.handleLvlUpButton(workout)} handleLvlDownButton={(id) => this.handleLvlDownButton(id)} />
                </>
            )
        }
        if (this.state.loading === true) {
            show = (
                <Spinner></Spinner>
            )
        }
        return (
            <Container className="workout" >
                <Row>
                    {show}
                </Row>
            </Container>
        )
    }
}

export default MainPanel
