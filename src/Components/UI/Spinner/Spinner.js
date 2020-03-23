import React from 'react'
import './Spinner.scss'

import { Col } from 'react-bootstrap'
const Spinner = () => {
    return (
        <Col className="loaderWrapper">
            <div className="loader">Loading...</div>
        </Col>
    )
}

export default Spinner
