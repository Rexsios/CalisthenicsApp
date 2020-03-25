import React, { useState } from 'react'
import './SingleWorkoutManage.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

import { Col } from 'react-bootstrap'

import { Transition, animated } from 'react-spring/renderprops'

import classNames from 'classnames'

import WorkoutSvg from '../../Assets/Svg/SingleWorkoutManage/WorkoutSvg'
import WarningMessage from '../UI/MessageBox/MessageBox'
import Backdrop from './Backdrop/Backdrop'

const SingleWorkoutManage = (props) => {
    const lastNumberOfSeries = props.workout.numberOfSeries[props.workout.numberOfSeries.length - 1]
    const lastquantityInSeries = props.workout.quantityInSeries[props.workout.quantityInSeries.length - 1]

    const [currentNumber, changeCurrentNumber] = useState(lastNumberOfSeries)
    const [currentQuantity, changeQuantity] = useState(lastquantityInSeries)
    const [windowStatus, changeWindowStatus] = useState(false)


    let levelText = `Poziom: ${props.workout.level}`
    if (props.workout.level === 10) levelText = "MASTER"

    if (props.message !== null) {
        if (props.message.reRender && props.message.id === props.workout.id && currentNumber !== 0 && currentQuantity !== 0) {
            changeCurrentNumber(0)
            changeQuantity(0)
        }
    }

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

        changeWindowStatus(true)
        props.handleConfirmButton(data)
    }

    const handleCloseButton = () => {
        let newNumberOfSeries = props.workout.numberOfSeries
        newNumberOfSeries.pop()
        let newNumberOfQuantity = props.workout.quantityInSeries
        newNumberOfQuantity.pop()

        let data = {
            id: props.workout.id,
            name: props.workout.name,
            level: props.workout.level,
            numberOfSeries: newNumberOfSeries,
            quantityInSeries: newNumberOfQuantity
        }

        changeWindowStatus(false)
        props.handleConfirmButton(data, true)
    }

    let checkStatus = (status) => {
        if (status === "down") {
            if (windowStatus || props.workout.level <= 1) {
                return true
            } else return false
        } else {
            if (windowStatus || props.workout.level >= 10) {
                return true
            } else return false
        }
    }

    const buttonDownValue = classNames({
        'singleWorkout__current__level__button': true,
        'singleWorkout__current__level__button--disable': checkStatus('down')
    })

    const iconDownValue = classNames({
        'singleWorkout__current__level__icon': true,
        'singleWorkout__current__level__icon--down': true,
        'singleWorkout__current__level__icon--disable': checkStatus('down')
    })

    const buttonUpValue = classNames({
        'singleWorkout__current__level__button': true,
        'singleWorkout__current__level__button--disable': checkStatus('up')
    })

    const iconUpValue = classNames({
        'singleWorkout__current__level__icon': true,
        'singleWorkout__current__level__icon--disable': checkStatus('up')
    })

    let message = null
    if (props.message !== null) {
        if (props.message.id === props.workout.id)
            message = (
                <WarningMessage type={props.message.type}>
                    {props.message.text}
                </WarningMessage>
            )
    }

    let disableWindow = null
    let textMessage = "Ostatnio robiłeś"
    if (windowStatus === true) {
        textMessage = "Dziś robisz"
        disableWindow = (
            <Backdrop>
                <button onClick={handleCloseButton} className="singleWorkout__current__button singleWorkout__current__button--undo">Przywróć</button>
            </Backdrop>
        )
    }

    return (
        <Col md={4} className="singleWorkoutWrapper">
            <Transition
                config={{ duration: 400 }}
                items={message}
                from={{
                    transform: 'translate3d(0,-10px,0)',
                    opacity: 0
                }}
                enter={{
                    transform: 'translate3d(0,0,0)',
                    opacity: 1
                }}
                leave={{
                    opacity: 0
                }}>
                {message => message && (props => <animated.div style={props}>{message}</animated.div>)}
            </Transition>
            <div className="singleWorkout">
                <h2>{props.workout.name}</h2>
                <div className="singleWorkout__last">
                    <div className="singleWorkout__last__text">
                        <h4 className="singleWorkout__last__title">{textMessage}</h4>
                        <h6>{levelText}</h6>
                        <h6>Ilosc: {lastNumberOfSeries} x {lastquantityInSeries}</h6>
                    </div>
                    <WorkoutSvg id={props.workout.id} className="singleWorkout__last__image"></WorkoutSvg>
                </div>

                <div className="singleWorkout__current">
                    {disableWindow}
                    <h4 className="singleWorkout__current__title">Dziś robisz</h4>
                    <div className="singleWorkout__current__level">
                        <button className={buttonDownValue} disabled={checkStatus('down')} >
                            <FontAwesomeIcon className={iconDownValue} icon={faAngleDoubleDown} />
                        </button>
                        <h6 className="singleWorkout__current__level__title">{levelText}</h6>
                        <button className={buttonUpValue} disabled={checkStatus('up')} onClick={() => props.handleLvlUpButton(props.workout)}>
                            <FontAwesomeIcon className={iconUpValue} icon={faAngleDoubleUp} />
                        </button>
                    </div>

                    <div className="singleWorkout__current__numberOfSeries">
                        <button className="singleWorkout__current__button" disabled={windowStatus} onClick={() => changeCurrentNumber(currentNumber - 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faMinus} />
                        </button>
                        <h6 className="singleWorkout__current__text">Ilość serii: {currentNumber}</h6>
                        <button className="singleWorkout__current__button" disabled={windowStatus} onClick={() => changeCurrentNumber(currentNumber + 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faPlus} />
                        </button>
                    </div>
                    <div className="singleWorkout__current__numberOfSeries">
                        <button className="singleWorkout__current__button" disabled={windowStatus} onClick={() => changeQuantity(currentQuantity - 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faMinus} />
                        </button>
                        <h6>Ilość powtórzeń: {currentQuantity} </h6>
                        <button className="singleWorkout__current__button" disabled={windowStatus} onClick={() => changeQuantity(currentQuantity + 1)}>
                            <FontAwesomeIcon className="singleWorkout__current__button__icon" icon={faPlus} />
                        </button>
                    </div>
                    <button className="singleWorkout__current__button" disabled={windowStatus} onClick={handleButton}>Zaczynamy!</button>
                </div>

            </div>
        </Col >
    )
}

export default SingleWorkoutManage
