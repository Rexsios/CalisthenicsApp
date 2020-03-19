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
        const user = axios.get('https://sportplan-addc3.firebaseio.com/Users/id.json')
            .then(response => {
                this.setState({
                    user: response.data
                })
            })
    }
    render() {
        console.log(this.state.user)
        return (
            <Container className="workout">
                <Row>
                    <SingleWorkoutManage />
                    <SingleWorkoutManage />
                    <SingleWorkoutManage />
                    <SingleWorkoutManage />
                    <SingleWorkoutManage />
                    <SingleWorkoutManage />
                </Row>
            </Container>
        )
    }
}

export default MainPanel
