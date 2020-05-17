import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { StyledWarningMessage } from './Initialization.styles'

interface IDetailProps {
  text: string
}

export const WarningMessage: React.FC<IDetailProps> = (props) => {
  const { text } = props
  const [visible, setvisible] = useState(true)
  return (
    <StyledWarningMessage isVisible={visible}>
      <span className="icon" onClick={() => setvisible(!visible)}>
        <FontAwesomeIcon icon={faExclamationCircle} />
      </span>
      <p
        className="text"
        onClick={() => {
          if (visible) setvisible(!visible)
        }}
      >
        {text}
      </p>
    </StyledWarningMessage>
  )
}
