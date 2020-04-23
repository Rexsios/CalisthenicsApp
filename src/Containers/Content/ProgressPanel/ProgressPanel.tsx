import React, { Component } from 'react'
import './ProgressPanel.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { RouteComponentProps } from 'react-router-dom'

interface IDetailProps extends RouteComponentProps {

}

export default class ProgressPanel extends Component<IDetailProps> {
    render() {
        return (
            <>
                <button className="goBackButton" onClick={() => { this.props.history.goBack() }}>
                    <FontAwesomeIcon icon={faArrowLeft} className="goBackButton__icon" />
                </button>

                <h1 className="text">
                    Dłużej niż wkrótce! :C
            </h1>
            </>
        )
    }
}
