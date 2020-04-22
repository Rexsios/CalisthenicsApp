import React, { Component } from 'react'
import './ExerciseInfoPanel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { RouteComponentProps } from 'react-router-dom'

export class ExerciseInfoPanel extends Component<IDetailProps, IDetailState> {
    render() {
        return (
            <>
                <button className="goBackButton" onClick={() => { this.props.history.goBack() }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="goBackButton__icon" />
                </button>

                <h1 className="text">
                    Wkrótce! :P
            </h1>
            </>
        )
    }
}

interface IDetailProps extends RouteComponentProps {

}

interface IDetailState {

}

export default ExerciseInfoPanel
