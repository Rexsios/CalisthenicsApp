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
  z-index: 3;

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
    margin-bottom: 0;
    padding-top: 10px;
    text-transform: uppercase;
    font-size: 30px;
    font-family: "Sriracha";
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

export const WrapperForRomanNumbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
  grid-auto-flow: row;
  grid-template-areas:
    "item item item"
    "item item item"
    "item item item"
    "lastbutton lastbutton lastbutton";
`

interface IDetailPropsRomanNumber {
  reachedLvl: boolean
}

export const StyledRomanNumber = styled.button<IDetailPropsRomanNumber>`
  align-self: center;
  justify-self: center;
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background-color: ${(p) => {
    let color: string = "red"
    if (p.reachedLvl) {
      color = constants.mainColor
    }
    return color
  }};
  border-radius: 5px;
  display: inline-block;
  border: none;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease 0s;
  font-family: "Roboto";
  letter-spacing: 1px;

  &:hover,
  &:focus {
    background: #434343;
    width: 90%;
    letter-spacing: 2px;
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
    outline: none;
  }
`

export const LastStyledRomanNumber = styled(StyledRomanNumber)`
  grid-area: lastbutton;
  font-size: 30px;
  font-family: "Sriracha";
`
