import React from 'react'
import './SingleWorkoutChoice.scss'
import WorkoutSvg from '../../../Assets/Svg/SingleWorkoutManage/WorkoutSvg'

interface IDetailProps {
    id: number
}

export const SingleWorkoutChoice: React.FC<IDetailProps> = (props) => {
    return (
        <div className="singleWorkoutChoice">
            <WorkoutSvg id={props.id} nameOfClass="singleWorkoutChoice__svg" />
        </div>
    )
}
