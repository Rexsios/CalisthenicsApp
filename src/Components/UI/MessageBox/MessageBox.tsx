import React from 'react'
import './MessageBox.scss'

import classNames from 'classnames'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faFrown } from '@fortawesome/free-solid-svg-icons'

import { MessageType } from '../../../Types/Enums/enumsList'

interface IDetailProps {
    type: MessageType
}

const warningMessage: React.FC<IDetailProps> = (props) => {
    const classValue = classNames({
        'messageBox': true,
        'messageBox--good': props.type === MessageType.GOOD,
        'messageBox--bad': props.type === MessageType.BAD
    })

    let icon = null;
    if (props.type === MessageType.GOOD) {
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
