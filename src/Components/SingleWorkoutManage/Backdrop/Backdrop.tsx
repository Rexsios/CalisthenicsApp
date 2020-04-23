import React from 'react'
import './Backdrop.scss'

const Backdrop:React.FC = (props) => {
    return (
        <div className="backdrop">{props.children}</div>
    )
}

export default Backdrop