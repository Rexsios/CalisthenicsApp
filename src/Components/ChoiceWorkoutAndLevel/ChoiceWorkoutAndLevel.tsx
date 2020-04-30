import React, { useState, useEffect } from "react"
import { StyledCloud, ChoiceWorkoutAndLevelContainer } from "./ChoiceWorkoutAndLevel.styles"

import { SingleWorkoutChoice } from "./SingleWorkoutChoice/SingleWorkoutChoice"
import { allWorkouts } from "../../Types/Interfaces/InterfecesList"
import { SpinnerForExerciseInfoPanel } from "../UI/SpinnerForExerciseInfoPanel/SpinnerForExerciseInfoPanel"

interface IDetailProps {
  loading: boolean
  workoutType: allWorkouts
}

export const ChoiceWorkoutAndLevel: React.FC<IDetailProps> = (props) => {
  const { loading, workoutType } = { ...props }
  const [text, setText] = useState("Wybierz które ćwiczenie chcesz przejżeć")

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  let showSingleWorkoutChoices = null
  let showCloud = null
  if (workoutType !== null && loading === false) {
    showSingleWorkoutChoices = Object.values(workoutType!).map((item) => {
      return (
        <SingleWorkoutChoice
          key={`SingleWorkoutChoice+${item.id}`}
          id={item.id}
          title={item.name}
        />
      )
    })
    showCloud = <StyledCloud>{text}</StyledCloud>
  }

  if (loading === true) {
    showSingleWorkoutChoices = <SpinnerForExerciseInfoPanel />
  }
  return (
    <>
      <ChoiceWorkoutAndLevelContainer>
        {showSingleWorkoutChoices}
        {showCloud}
      </ChoiceWorkoutAndLevelContainer>
    </>
  )
}
