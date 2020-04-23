import React from 'react'
import './MessageBox.scss'

import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faFrown } from '@fortawesome/free-solid-svg-icons'

import { messageType } from '../../../Types/Enums/enumsList'

interface IDetailProps {
    type: messageType
}

const warningMessage: React.FC<IDetailProps> = (props) => {
    const classValue = classNames({
        'messageBox': true,
        'messageBox--good': props.type === messageType.GOOD,
        'messageBox--bad': props.type === messageType.BAD
    })

    let icon = null;
    if (props.type === messageType.GOOD) {
        icon = <FontAwesomeIcon className="messageBox__icon messageBox__icon--good" icon={faSmileBeam} />
    } else {
        icon = <FontAwesomeIcon className="messageBox__icon messageBox__icon--bad" icon={faFrown} />
    }

    return (
        <div className={classValue}>
            <h4 className="messageBox__text">
                {props.children}
            </h4>
            {icon}
        </div>
    )
}

export default warningMessage
