import styled from "styled-components"
import { constants } from "../../const.styles"

import { Title } from "../../Assets/Svg/ChoosenWorkoutInfo/Title"
import { Achive } from "../../Assets/Svg/ChoosenWorkoutInfo/Achive"

interface IDetailProps {
  areaId: number
}

export const Header = styled.header`
  display: grid;
  color: white;
  grid-template-columns: 1fr 1fr 2fr 2fr;
  grid-template-areas: "achiveLvl achiveLvl title title";

  @media (min-width: 768px) {
    grid-template-columns: 100px 1fr 1fr 2fr;
    grid-template-areas: ". achiveLvl . title";
  }
`

export const TitleStyled = styled(Title)`
  grid-area: title;
`

export const StyledAchive = styled(Achive)`
  grid-area: achiveLvl;
`

export const Wrapper = styled.div`
  display: grid;
  color: white;

  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "main main"
    "arrow1 arrow2";
  @media (min-width: 768px) {
    grid-template-columns: 100px auto 100px;
    grid-template-areas: "arrow1 main arrow2";
  }
`
interface IDetailPropsForArrow extends IDetailProps {
  avaliable: boolean
}

export const Arrow = styled.button<IDetailPropsForArrow>`
  grid-area: ${(p) => {
    return `arrow${p.areaId}`
  }};
  background-color: transparent !important;
  text-transform: uppercase;
  text-decoration: none;
  border: 0;
  padding: 0;
  justify-self: center;
  align-self: center;

  &:hover,
  &:focus {
    outline: none;
    svg {
      color: ${(p) => {
        if (p.avaliable) return constants.mainColor
        else return "#808080"
      }};
      transition: all 0.4s ease 0s;
    }
  }
  svg {
    font-size: 70px;
    color: ${(p) => {
        if (p.avaliable) return '#fff'
        else return "#808080"
      }};
    transition: all 0.2s ease 0s;
  }
`

export const MainContainer = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: auto 50px;
  grid-template-areas:
    "title1 title1"
    "content1 content1"
    "title2 title2"
    "content2 content2"
    "title3 level"
    "content3 level"
    "title4 level"
    "content4 level"
    "photo1 level"
    "photo2 level";
  padding: 5px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border: 2px solid #73049f;
  grid-column-gap: 10px;

  @media (min-width: 768px) {
    border: 6px solid #73049f;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-areas:
      "level level level level"
      "title1 title1 . ."
      "content1 content1 content1 content1"
      ". . title2 title2"
      "content2 content2 content2 content2"
      "title3 title3 title4 title4"
      "content3 content3 content4 content4"
      "photo1 photo1 photo2 photo2";
    padding: 15px;
    grid-column-gap: 30px;
  }
`

export const LevelWrapper = styled.div`
  grid-area: level;
  display: grid;
  grid-template-rows: repeat(9, 50px) 250px;
  grid-template-columns: 50px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(9, 1fr) 2fr;
    grid-template-rows: auto;
    margin-bottom: 30px;
  }
`

interface IDetailPropsRomanNumber {
  reachedLvl: boolean
  choosenLvl: boolean
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
  border: ${(p) => {
    if (p.choosenLvl) {
      return "4px solid white"
    }
    return "4px solid transparent"
  }};
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

  @media (min-width: 768px) {
  }
`

export const LastStyledRomanNumber = styled(StyledRomanNumber)`
  font-size: 30px;
  font-family: "Sriracha";
  h4 {
    writing-mode: vertical-rl;
    text-orientation: upright;
    font-size: 16px;
    margin: auto auto;
  }
  @media (min-width: 768px) {
    h4 {
      writing-mode: horizontal-tb;
      padding: 10px 0;
    }
  }
`

export const TitleWrapper = styled.div<IDetailProps>`
  grid-area: ${(p) => {
    return "title" + p.areaId
  }};
`
export const ContentWrapper = styled.div<IDetailProps>`
  grid-area: ${(p) => {
    return "content" + p.areaId
  }};
  text-align: center;
  background: ${(p) => {
    if (p.areaId === 1) {
      return "linear-gradient(135deg, rgba(247,165,24,1) 0%, rgba(247,165,24,1) 1%, rgba(127,60,0,1) 80%, rgba(127,60,0,1) 100%)"
    } else if (p.areaId === 2) {
      return "linear-gradient(to right, rgba(27,85,179,1) 0%, rgba(27,85,179,1) 1%, rgba(16,93,207,1) 80%, rgba(16,93,207,1) 100%)"
    } else if (p.areaId === 3) {
      return "linear-gradient(42deg, rgba(247,35,24,1) 0%, rgba(247,35,24,1) 1%, rgba(155,8,17,1) 80%, rgba(155,8,17,1) 100%)"
    } else {
      return "linear-gradient(135deg, rgba(83,0,127,1) 0%, rgba(83,0,127,1) 1%, rgba(206,24,247,1) 80%, rgba(206,24,247,1) 100%)"
    }
  }};
  padding: 5px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 20px;
  border: 5px solid white;

  @media (min-width: 768px) {
    padding: 40px;
    font-size: 18px;

    border: 10px solid white;
  }
`

export const Goals = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
`

export const PhotoWrapper = styled.div<IDetailProps>`
  grid-area: ${(p) => {
    return "photo" + p.areaId
  }};
  display: grid;
  margin-bottom:20px;
  img {
    width: 100%;
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      text-align: left;

      width: 80%;
      margin: 0 auto;
    }
  }
`
