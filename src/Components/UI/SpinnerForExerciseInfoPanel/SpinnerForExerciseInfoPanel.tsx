import React from "react"
import {StyledSpinner} from './SpinnerForExerciseInfoPanel.styles'

interface IDetailProps {
  color:string
  className?:string
}

export const SpinnerForExerciseInfoPanel: React.FC<IDetailProps> = (props) => {
  return (
      <StyledSpinner viewBox="0 0 50 50" color={props.color} className={props.className}>
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
      </StyledSpinner>
  )
}
