import React from 'react'
import './SingleWorkoutManage.scss'

import { Col } from 'react-bootstrap'

const SingleWorkoutManage = (props) => {
    return (
        <Col md={4} className="singleWorkoutWrapper">
            <div className="singleWorkout">

                <h2>Nazwa cwiczenia</h2>
                <div className="singleWorkout__last">
                    <h4>Ostatnio robiłeś</h4>
                    <h6>Poziom: IV</h6>
                    <h6>Ilosc: 3x20</h6>
                </div>
                <div className="singleWorkout__current">
                    <h4>Dziś robisz</h4>
                    <h6>Poziom: IV</h6>
                    <h6>Ilość serii: 3</h6>
                    <h6>Ilość powtórzeń: </h6>
                </div>

            </div>
        </Col>
    )
}

export default SingleWorkoutManage
