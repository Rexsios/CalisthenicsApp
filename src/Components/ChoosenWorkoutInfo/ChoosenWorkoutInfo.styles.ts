import styled from "styled-components"
import { constants } from "../../const.styles"

import { Title } from "../../Assets/Svg/ChoosenWorkoutInfo/Title"

export const Header = styled.header`
  display: grid;
  grid-template-columns: 2fr 2fr;
  color: white;
  grid-template-areas: ". title";
`

export const TitleStyled = styled(Title)`
  grid-area:title;
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto 100px;
  color: white;
`

export const Arrow = styled.div`
  justify-self: center;
  align-self: center;
  svg {
    font-size: 70px;
  }
`

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "level level level level"
    "title1 title1 . ."
    "content1 content1 content1 content1"
    ". . title2 title2"
    "content2 content2 content2 content2"
    "title3 title3 title4 title4"
    "content3 content3 content4 content4"
    "photo1 photo1 photo2 photo2";
  border: 6px solid #73049f;
  border-bottom-left-radius:30px;
  border-bottom-right-radius:30px;
  padding: 15px;
  grid-column-gap: 30px;
`

export const LevelWrapper = styled.div`
  grid-area: level;
  display: grid;
  grid-template-columns: repeat(9, 1fr) 2fr;
  grid-template-rows: 50px;
  margin-bottom: 30px;
`

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
  font-size: 30px;
  font-family: "Sriracha";
`

interface IDetailProps {
  areaId: number
}

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
  padding: 40px;
  border: 10px solid white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-bottom: 20px;
  font-size: 18px;
`

export const Goals= styled.div`
  display:grid;
  height:100%;
  grid-template-columns:1fr auto;
  grid-template-rows:1fr 1fr 1fr;
  align-items:center;
  text-align:left;
`

interface IDetailPropsRomanNumber {
  reachedLvl: boolean
}
export const PhotoWrapper = styled.div<IDetailProps>`
  grid-area: ${(p) => {
    return "photo" + p.areaId
  }};
  display:grid;

  img {
    width: 80%;
    margin:0 auto;
  }
`
