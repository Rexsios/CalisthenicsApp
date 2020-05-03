import React from "react"
import { singleWorkout } from "../../Types/Interfaces/InterfecesList"

interface IDetailProps {
  singleWorkout: singleWorkout
}

export const ChoosenWorkoutInfo:React.FC<IDetailProps> = (props) => {

  console.log(props.singleWorkout)
  return (
    <div></div>
  )
}
