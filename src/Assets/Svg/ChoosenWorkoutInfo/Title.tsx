import * as React from "react"
import styled from "styled-components"
import { SpinnerForExerciseInfoPanel } from "../../../Components/UI/SpinnerForExerciseInfoPanel/SpinnerForExerciseInfoPanel"

interface IDetailProps {
  inscription: string | null
  number: number
  svg: JSX.Element
  className?: string
  loading: boolean
}

const TitleNoStyled: React.FC<IDetailProps> = (props) => {
  let showInscription: any
  if (props.loading) {
    showInscription = (
      <h3 className="title">
        <StyledCos color="#6a2a80"/>
      </h3>
    )
  } else {
    showInscription = <h3 className="title">{props.inscription}</h3>
  }
  return (
    <svg
      id="Titleprefix__Warstwa_1"
      x={0}
      y={0}
      viewBox="0 0 1366 232"
      xmlSpace="preserve"
      className={props.className}
    >
      <style>
        {
          ".Titleprefix__st1{fill:#73049f}.Titleprefix__st3{fill:#fff}.Titleprefix__st5{font-family:Roboto}.Titleprefix__st6{font-size:99.9365px}.Titleprefix__st7{letter-spacing:6}"
        }
      </style>
      <linearGradient
        id="Titleprefix__SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1={1478.358}
        y1={-527.528}
        x2={-420.146}
        y2={1002.687}
      >
        <stop offset={0.007} stopColor="#3e1a56" />
        <stop offset={0.789} stopColor="#2b2034" />
      </linearGradient>
      <path
        d="M5.8 229.4L93 61.8C111.9 25.5 148.9 3 189.6 3h1172l-100.9 175.1c-18.2 31.6-52.2 51.3-88.6 51.3H5.8z"
        fill="url(#Titleprefix__SVGID_1_)"
      />
      <path
        className="Titleprefix__st1"
        d="M1356.5 6l-98.3 170.6c-17.7 30.7-50.6 49.8-86 49.8H10.7l85-163.3c9-17.2 22.5-31.7 39-41.7C151.3 11.3 170.3 6 189.6 6h1166.9m10.4-6H189.6c-41.7 0-80 23.3-99.3 60.4L.8 232.4h1171.4c37.6 0 72.4-20.1 91.2-52.8L1366.9 0z"
      />
      <linearGradient
        id="Titleprefix__SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1={309.99}
        y1={115.926}
        x2={1058.891}
        y2={115.926}
      >
        <stop offset={0.007} stopColor="#3e1a56" />
        <stop offset={0.789} stopColor="#31163c" />
      </linearGradient>
      <path
        d="M310 228.9l48.5-167.8C368.8 25.3 388.8 3 410.6 3h648.3l-56.1 175.3c-10 31.2-28.2 50.6-47.7 50.6H310z"
        fill="url(#Titleprefix__SVGID_2_)"
      />
      <path
        className="Titleprefix__st1"
        d="M1054.8 6L1000 177.4c-9.6 29.9-26.7 48.5-44.8 48.5H314l47.4-164c5-17.3 12.4-31.7 21.5-41.6C391.4 10.9 401 6 410.6 6h644.2m8.2-6H410.6c-23.1 0-44.3 23.2-55 60.2L306 231.9h649.2c20.8 0 40.1-20.1 50.5-52.7L1063 0z"
      />
      <path fill="none" d="M331.7 50h657.1v192H331.7z" />
      <foreignObject width="100%" height="100%">
        <div className="icon">{props.svg}</div>
      </foreignObject>
      <foreignObject width="100%" height="100%">
        {showInscription}
      </foreignObject>
      <foreignObject width="100%" height="100%">
        <h3 className="number">{props.number}</h3>
      </foreignObject>
    </svg>
  )
}

const StyledCos = styled(SpinnerForExerciseInfoPanel)`
  width: 25%;
`

export const Title = styled(TitleNoStyled)`
  .icon {
    position: absolute;
    left: 105px;
    fill: white;
    width: 200px;
    top: 50%;
    transform: translateY(-50%);
  }

  .title {
    position: absolute;
    font-size: 55px;
    left: 370px;
    width: 650px;
    text-align: center;
    font-family: "Josefin Sans";
    font-weight: 700;
    top: 50%;
    transform: translateY(-40%);
    margin: 0;
    padding: 0;
    line-height: 90px;
  }

  .number {
    position: absolute;
    font-size: 150px;
    left: 820px;
    width: 650px;
    top: 50px;
    text-align: center;
    font-family: "Josefin Sans";
    font-weight: 700;
  }
`
