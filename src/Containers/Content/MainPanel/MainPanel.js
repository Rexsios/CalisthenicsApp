import React, { Component } from 'react'
import './MainPanel.scss'

import axios from 'axios'

import { Container, Row } from 'react-bootstrap'

import SingleWorkoutManage from '../../../Components/SingleWorkoutManage/SingleWorkoutManage'

export class MainPanel extends Component {

    state = {
        user: null,
    }

    componentDidMount() {
        axios.get('https://sportplan-addc3.firebaseio.com/Users/id.json')
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }
    render() {

        let show = null;
        if (this.state.user !== null) {
            let { bridge, legRaising, pushUps, pushUpsOnHands, rising, squads } = { ...this.state.user.workoutType }
            
            show = (
                <>
                    <SingleWorkoutManage workout={bridge} />
                    <SingleWorkoutManage workout={legRaising} />
                    <SingleWorkoutManage workout={pushUps} />
                    <SingleWorkoutManage workout={pushUpsOnHands} />
                    <SingleWorkoutManage workout={rising} />
                    <SingleWorkoutManage workout={squads} />
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
