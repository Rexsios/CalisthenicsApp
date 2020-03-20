import React, { useState } from 'react'
import './SingleWorkoutManage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { Col, Button } from 'react-bootstrap'

import PushUps from '../../Assets/Svg/SingleWorkoutManage/PushUps'

const SingleWorkoutManage = (props) => {
    const lastNumberOfSeries = props.workout.numberOfSeries[props.workout.numberOfSeries.length - 1]
    const lastquantityInSeries = props.workout.quantityInSeries[props.workout.quantityInSeries.length - 1]

    const [currentNumber, changeCurrentNumber] = useState(lastNumberOfSeries)
    const [currentQuantity, changeQuantity] = useState(lastquantityInSeries)

    return (
        <Col md={4} className="singleWorkoutWrapper">
            <div className="singleWorkout">

                <h2>{props.workout.name}</h2>
                <div className="singleWorkout__last">
                    <div className="singleWorkout__last__text">
                        <h4 className="singleWorkout__last__title">Ostatnio robiłeś</h4>
                        <h6>Poziom: {props.workout.level} </h6>
                        <h6>Ilosc: {lastNumberOfSeries} x {lastquantityInSeries}</h6>
                    </div>
                        <PushUps className="singleWorkout__last__image"></PushUps>
                </div>
                <div className="singleWorkout__current">
                    <h4 className="singleWorkout__current__title">Dziś robisz</h4>
                    <h6>Poziom: {props.workout.level}</h6>
                    <div className="singleWorkout__current__numberOfSeries">
                        <button className="singleWorkout__current__button" onClick={() => changeCurrentNumber(currentNumber - 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faMinus} />
                        </button>
                        <h6 className="singleWorkout__current__text">Ilość serii: {currentNumber}</h6>
                        <button className="singleWorkout__current__button" onClick={() => changeCurrentNumber(currentNumber + 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faPlus} />
                        </button>
                    </div>
                    <div className="singleWorkout__current__numberOfSeries">
                        <button className="singleWorkout__current__button" onClick={() => changeQuantity(currentQuantity - 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faMinus} />
                        </button>
                        <h6>Ilość powtórzeń: {currentQuantity} </h6>
                        <button className="singleWorkout__current__button" onClick={() => changeQuantity(currentQuantity + 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faPlus} />
                        </button>
                    </div>
                    <button className="singleWorkout__current__button">Zaczynamy!</button>
                </div>

            </div>
        </Col>
    )
}

export default SingleWorkoutManage
