import React, { useState } from 'react'
import './ChoiceWorkoutAndLevel.scss'
import { SingleWorkoutChoice } from './SingleWorkoutChoice/SingleWorkoutChoice'
import { SingleLvlChoice } from './SingleLvlChoice/SingleLvlChoice'
import Cloud from '../../Assets/Svg/ChoiceWorkoutPanel/Cloud';

export const ChoiceWorkoutAndLevel: React.FC = () => {

    const [text, setText] = useState("Wybierz które ćwiczenie chcesz przejżeć")

    let showCos: JSX.Element[] = []

    for (let i = 1; i <= 6; i++) {
        showCos.push(<SingleWorkoutChoice id={i} key={`SignleWorkoutChoice+${i}`} />)
    }
    return (
        <>
            <div className="choiceWorkoutAndLevel">
                {showCos}
                <Cloud nameOfClass="choiceWorkoutAndLevel__title">
                    {text}
                </Cloud>
            </div>
        </>
    )
}
