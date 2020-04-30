import styled from "styled-components"
import WorkoutSvg from "../../../Assets/Svg/SingleWorkoutManage/WorkoutSvg"
import { constants } from "../../../const.styles"

interface IDetailProps {
  gridType: string
}

export const SingleWorkoutChoiceDiv = styled.div<IDetailProps>`
  background-color: inherit;
  grid-area: ${(p) => p.gridType};
  display: grid;
  grid-template-columns: 7fr 1fr;
  color: ${constants.buttonColor};
  border: 6px solid #494949;
  border-radius: 6px;
  transition: all 0.3s ease 0s;

  &:hover,
  &:focus {
    cursor: pointer;
    color: #494949;
    border-radius: 50px;
    border-color: ${constants.mainColor};
    transition: all 0.5s ease 0s;
    outline: none;
  }

  h2 {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    margin-bottom:0;
    margin-top:5px;
    text-transform: uppercase;
    font-size:31px;
    font-family:"Sriracha";
    color: #20bf6b;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: white;
    transform: rotate(-2deg);
  }
`
export const StyledWorkoutSvg = styled(WorkoutSvg)`
  max-height: 90%;
  align-self: center;
  justify-self: center;
  fill: rgb(160, 147, 147);
`
