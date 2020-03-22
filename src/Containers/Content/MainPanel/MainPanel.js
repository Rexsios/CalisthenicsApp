import React, { Component } from 'react'
import './MainPanel.scss'

import axios from 'axios'

import { Container, Row } from 'react-bootstrap'

import SingleWorkoutManage from '../../../Components/SingleWorkoutManage/SingleWorkoutManage'

export class MainPanel extends Component {

    state = {
        user: null
    }

    componentDidMount() {
        console.log('work')
        axios.get('https://sportplan-addc3.firebaseio.com/Users/-M32LvRep6-4W2Ol-RHE.json')
            .then(response => {
                this.setState({
                    user: response.data
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
            })
            .catch(error => {
            })
    }

    render() {

        let show = null;
        if (this.state.user !== null) {
            let { bridge, legRaising, pushUps, pushUpsOnHands, pullUps, squads } = { ...this.state.user.workoutType }
            show = (
                <>
                    <SingleWorkoutManage workout={bridge} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={legRaising} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={pushUps} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={pushUpsOnHands} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={pullUps} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                    <SingleWorkoutManage workout={squads} handleConfirmButton={(data) => this.handleConfirmWorkout(data)} />
                </>
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
