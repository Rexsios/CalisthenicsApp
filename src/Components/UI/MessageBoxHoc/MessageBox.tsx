import React, { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmileBeam, faFrown } from '@fortawesome/free-solid-svg-icons'

import { MessageType } from '../../../Types/Enums/enumsList'
import { MessageBoxWrapper } from './MessageBox.styles'

import { useTransition, animated } from 'react-spring'

interface IDetailProps {
  messageType?: {
    text: string
    type: MessageType
  }
}

const MessageBox: React.FC<IDetailProps> = (props) => {
  const { messageType } = props

  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (messageType!.text.length !== 0) {
      setShowMessage(true)
      setTimeout(() => {
        setShowMessage(false)
      }, 3000)
    }
  }, [messageType])

  const transition = useTransition(showMessage, null, {
    from: { transform: 'translate3d(0,-50px,0)', zIndex: 100, position: 'relative', opacity: 0 },
    enter: { transform: 'translate3d(0,0,0)', opacity: 1 },
    leave: { opacity: 0 },
  })

  const messageBox = (
    <MessageBoxWrapper isGood={messageType?.type === MessageType.GOOD ? true : false}>
      <h4>
        {messageType!.text}
        <FontAwesomeIcon icon={messageType?.type === MessageType.GOOD ? faSmileBeam : faFrown} />
      </h4>
    </MessageBoxWrapper>
  )

  return (
    <>
      {transition.map(({ item, key, props }) => {
        return (
          item && (
            <animated.div key={key} style={props}>
              {messageBox}
            </animated.div>
          )
        )
      })}
    </>
  )
}

export default MessageBox
