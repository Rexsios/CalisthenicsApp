import React, { useState } from 'react'
import './SingleWorkoutManage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

import { Col } from 'react-bootstrap'

import WorkoutSvg from '../../Assets/Svg/SingleWorkoutManage/WorkoutSvg'

const SingleWorkoutManage = (props) => {
    const lastNumberOfSeries = props.workout.numberOfSeries[props.workout.numberOfSeries.length - 1]
    const lastquantityInSeries = props.workout.quantityInSeries[props.workout.quantityInSeries.length - 1]

    const [currentNumber, changeCurrentNumber] = useState(lastNumberOfSeries)
    const [currentQuantity, changeQuantity] = useState(lastquantityInSeries)

    const handleButton = () => {
        if (lastNumberOfSeries === currentNumber && lastquantityInSeries === currentQuantity) return null
        let newNumberOfSeries = props.workout.numberOfSeries
        newNumberOfSeries.push(currentNumber)
        let newNumberOfQuantity = props.workout.quantityInSeries
        newNumberOfQuantity.push(currentQuantity)

        let data = {
            id: props.workout.id,
            name: props.workout.name,
            level: props.workout.level,
            numberOfSeries: newNumberOfSeries,
            quantityInSeries: newNumberOfQuantity
        }
        props.handleConfirmButton(data)
    }

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
                    <WorkoutSvg id={props.workout.id} className="singleWorkout__last__image"></WorkoutSvg>
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
                    <button className="singleWorkout__current__button" onClick={handleButton}>Zaczynamy!</button>
                </div>

            </div>
        </Col>
    )
}

export default SingleWorkoutManage
