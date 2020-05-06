import React, { useState, useEffect } from "react"
import { StyledCloud, ChoiceWorkoutAndLevelContainer } from "./ChoiceWorkoutAndLevel.styles"

import { SingleWorkoutChoice } from "./SingleWorkoutChoice/SingleWorkoutChoice"
import { allWorkouts } from "../../Types/Interfaces/InterfecesList"
import { SpinnerForExerciseInfoPanel } from "../UI/SpinnerForExerciseInfoPanel/SpinnerForExerciseInfoPanel"
import { WhichWorkout } from "../../Types/Enums/enumsList"
import { MainBackdrop } from "../UI/Backdrop/Backdrop"
import {constants} from '../../const.styles'

interface IDetailProps {
  loading: boolean
  workoutType: allWorkouts
  handleExactWorkout: (id: WhichWorkout, lvl: number, name: string, achivedLvl:number) => void
}

export const ChoiceWorkoutAndLevel: React.FC<IDetailProps> = (props) => {
  const { loading, workoutType } = { ...props }
  const [text, setText] = useState("Wybierz które ćwiczenie chcesz przejżeć")
  const [whichActive, changeWhichActive] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  function handleIsActiveWindow(id: WhichWorkout) {
    changeWhichActive(id)
    let whichWord: string = ""
    Object.values(workoutType!).map((item) => {
      if (item.id === id) {
        whichWord = item.name
      }
      return null
    })
    setText(`Wybierz poziom w ćwiczeniu ${whichWord}`)
  }

  function resetActiveWindow() {
    changeWhichActive(0)
    setText("Wybierz które ćwiczenie chcesz przejżeć")
  }

  let showSingleWorkoutChoices = null
  let showCloud = null
  let isActive: boolean = false
  if (workoutType !== null && loading === false) {
    showSingleWorkoutChoices = Object.values(workoutType!).map((item) => {
      if (item.id === whichActive) {
        isActive = true
      } else {
        isActive = false
      }
      return (
        <SingleWorkoutChoice
          key={`SingleWorkoutChoice+${item.id}`}
          id={item.id}
          title={item.name}
          lvl={item.level}
          handleIsActiveWindow={handleIsActiveWindow}
          isActive={isActive}
          handleExactWorkout={props.handleExactWorkout}
        />
      )
    })
    showCloud = <StyledCloud>{text}</StyledCloud>
  }

  if (loading === true) {
    showSingleWorkoutChoices = <SpinnerForExerciseInfoPanel color={constants.mainColor} />
  }
  return (
    <>
      <ChoiceWorkoutAndLevelContainer>
        <MainBackdrop sideDrawerClick={resetActiveWindow} />
        {showSingleWorkoutChoices}
        {showCloud}
      </ChoiceWorkoutAndLevelContainer>
    </>
  )
}
