import React from "react"
import { SingleWorkoutChoiceDiv, StyledWorkoutSvg } from "./SingleWorkoutChoice.styles"
import { WhichWorkout } from "../../../Types/Enums/enumsList"

interface IDetailProps {
  id: WhichWorkout
  title: string
}

export const SingleWorkoutChoice: React.FC<IDetailProps> = (props) => {
  return (
    <SingleWorkoutChoiceDiv gridType={`item${props.id}`} tabIndex={0}>
      <StyledWorkoutSvg id={props.id} />
      <h2>{props.title}</h2>
    </SingleWorkoutChoiceDiv>
  )
}
