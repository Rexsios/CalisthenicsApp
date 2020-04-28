import React, { Component } from 'react'
import './ExerciseInfoPanel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { RouteComponentProps, Switch, Route } from 'react-router-dom'
import { ChoiceWorkoutAndLevel } from '../../../Components/ChoiceWorkoutAndLevel/ChoiceWorkoutAndLevel'

interface IDetailProps extends RouteComponentProps {

}

export default class ExerciseInfoPanel extends Component<IDetailProps> {
    render() {
        return (
            <>
                <button className="goBackButton" onClick={() => { this.props.history.goBack() }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="goBackButton__icon" />
                </button>

                <Switch>
                    <Route path={this.props.match.url} component={ChoiceWorkoutAndLevel} />
                </Switch>
            </>
        )
    }
}
