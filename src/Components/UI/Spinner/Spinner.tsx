import React from 'react'
import './Spinner.scss'

import { Col } from 'react-bootstrap'
const Spinner: React.FC = () => {
    return (
        <Col className="loaderWrapper">
            <div className="loader">Loading...</div>
        </Col>
    )
}

export default Spinner
