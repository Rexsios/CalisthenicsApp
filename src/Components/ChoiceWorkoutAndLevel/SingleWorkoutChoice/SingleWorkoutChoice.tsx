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
  lvl: number
  handleIsActiveWindow: (id: WhichWorkout) => void
  handleExactWorkout: (id: WhichWorkout, lvl: number, name: string, achivedLvl:number) => void
}

export const SingleWorkoutChoice: React.FC<IDetailProps> = (props) => {
  let show = null
  let showArrayOfNumbers: JSX.Element[] = []
  let reachLvl: boolean = false
  if (props.isActive) {
    for (let i = 1; i <= 10; i++) {
      if (props.lvl >= i) reachLvl = true
      else reachLvl = false
      if (i !== 10) {
        showArrayOfNumbers.push(
          <StyledRomanNumber
            reachedLvl={reachLvl}
            onClick={() => props.handleExactWorkout(props.id, i, props.title,props.lvl)}
            key={`StyledRomanNumber${i}`}
          >
            {RomanNumerals.roman(i)}
          </StyledRomanNumber>
        )
      } else {
        showArrayOfNumbers.push(
          <LastStyledRomanNumber
            reachedLvl={reachLvl}
            onClick={() => props.handleExactWorkout(props.id, i, props.title,props.lvl)}
            key={`StyledRomanNumber${i}`}
          >
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
