import React, { Component } from 'react'
import './MainPanel.scss'

import axios from 'axios'

import { Container, Row } from 'react-bootstrap'

import SingleWorkoutManage from '../../../Components/SingleWorkoutManage/SingleWorkoutManage'
import Spinner from '../../../Components/UI/Spinner/Spinner'

export class MainPanel extends Component {

    state = {
        user: null,
        loading: false,
        message: {
            id: null,
            text: null,
            type: "good"
        }
    }

    componentDidMount() {

        this.setState({ loading: true })
        axios.get('https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE.json')
            .then(response => {
                this.setState({
                    user: response.data,
                    loading: false,
                })
            })
            .catch(error => {
                this.setState({
                    loading: false
                })
            })
    }

    handleConfirmWorkout = (data) => {
        let whichWorkout = null;
        switch (data.id) {
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
        axios.put(`https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE/workoutType/${whichWorkout}.json`, data)
            .then(response => {
                console.log(response)
                this.setState({
                    message: {
                        id: data.id,
                        text: "Zapisano w bazie danych.",
                        type: "good"
                    }
                })
                setTimeout(() => {
                    this.setState({ message: null })
                }, 3000)
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    message: {
                        id: data.id,
                        text: "Coś poszło nie tak.",
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
        if (this.state.user !== null && this.state.loading === false) {
            let { bridge, legRaising, pushUps, pushUpsOnHands, pullUps, squads } = { ...this.state.user.workoutType }
            show = (
                <>
                    <SingleWorkoutManage workout={bridge} message={this.state.message} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={legRaising} message={this.state.message} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={pushUps} message={this.state.message} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={pushUpsOnHands} message={this.state.message} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={pullUps} message={this.state.message} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={squads} message={this.state.message} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
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
