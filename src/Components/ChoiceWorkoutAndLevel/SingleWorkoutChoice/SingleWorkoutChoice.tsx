import React from "react"
import {
  SingleWorkoutChoiceDiv,
  StyledWorkoutSvg,
  StyledRomanNumber,
  WrapperForRomanNumbers,
  LastStyledRomanNumber,
} from "./SingleWorkoutChoice.styles"
import { WhichWorkout } from "../../../Types/Enums/enumsList"
import RomanNumerals from "../../../Types/Classes/RomanNumerals"

interface IDetailProps {
  id: WhichWorkout
  title: string
  isActive: boolean
  handleIsActiveWindow: (id: WhichWorkout) => void
  handleExactWorkout: (id: WhichWorkout, lvl: number) => void
}

export const SingleWorkoutChoice: React.FC<IDetailProps> = (props) => {
  let show = null
  let showArrayOfNumbers: JSX.Element[] = []
  if (props.isActive) {
    for (let i = 1; i <= 10; i++) {
      if (i !== 10) {
        showArrayOfNumbers.push(
          <StyledRomanNumber onClick={() => props.handleExactWorkout(props.id, i)} key={`StyledRomanNumber${i}`}>
            {RomanNumerals.roman(i)}
          </StyledRomanNumber>
        )
      } else {
        showArrayOfNumbers.push(
          <LastStyledRomanNumber onClick={() => props.handleExactWorkout(props.id, i)} key={`StyledRomanNumber${i}`}>
            MASTER
          </LastStyledRomanNumber>
        )
      }
    }
    show = <WrapperForRomanNumbers>{showArrayOfNumbers}</WrapperForRomanNumbers>
  } else {
    show = (
      <>
        <StyledWorkoutSvg id={props.id} />
      </>
    )
  }
  return (
    <SingleWorkoutChoiceDiv
      gridType={`item${props.id}`}
      tabIndex={0}
      onClick={() => props.handleIsActiveWindow(props.id)}
      onKeyPress={() => props.handleIsActiveWindow(props.id)}
    >
      {show}
      <h2>{props.title}</h2>
    </SingleWorkoutChoiceDiv>
  )
}
