import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import photo1 from "../../Assets/Images/photo1.png"
import { TitleStyled, Goals, LastStyledRomanNumber } from "./ChoosenWorkoutInfo.styles"

import { singleWorkout } from "../../Types/Interfaces/InterfecesList"
import {
  Wrapper,
  Arrow,
  MainContainer,
  TitleWrapper,
  ContentWrapper,
  LevelWrapper,
  PhotoWrapper,
  StyledRomanNumber,
  Header,
} from "./ChoosenWorkoutInfo.styles"
import { Execution } from "../../Assets/Svg/ChoosenWorkoutInfo/Execution"
import RomanNumerals from "../../Types/Classes/RomanNumerals"
import { XRay } from "../../Assets/Svg/ChoosenWorkoutInfo/XRay"
import { Goal } from "../../Assets/Svg/ChoosenWorkoutInfo/Goal"
import { Improving } from "../../Assets/Svg/ChoosenWorkoutInfo/Improving"

interface IDetailProps {
  singleWorkout: singleWorkout
  achiveLvl:number
}

export const ChoosenWorkoutInfo: React.FC<IDetailProps> = (props) => {
  const { singleWorkout,achiveLvl } = props

  let showArrayOfNumbers: JSX.Element[] = []
  let reachLvl: boolean = false
  for (let i = 1; i <= 10; i++) {
    if (singleWorkout !== null)
      if (achiveLvl >= i) reachLvl = true
      else reachLvl = false

    if (i !== 10) {
      showArrayOfNumbers.push(
        <StyledRomanNumber reachedLvl={reachLvl} key={`StyledRomanNumber${i}`}>
          {RomanNumerals.roman(i)}
        </StyledRomanNumber>
      )
    } else {
      showArrayOfNumbers.push(
        <LastStyledRomanNumber reachedLvl={reachLvl} key={`StyledRomanNumber${i}`}>
          MASTER
        </LastStyledRomanNumber>
      )
    }
  }

  return (
    <>
      <Header>
        <TitleStyled />
      </Header>
      <Wrapper>
        <Arrow>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Arrow>
        <MainContainer>
          <LevelWrapper>{showArrayOfNumbers}</LevelWrapper>
          <TitleWrapper areaId={1}>
            <Execution />
          </TitleWrapper>
          <ContentWrapper areaId={1}>
            Stań zwrócony twarzą do ściany, mając stopy jedna przy drugiej. Dłonie oprzyj płasko na
            ścianie. Ręce powinny być wyprostowane i rozstawione na szerokość barków. Dłonie są na
            wysokości klatki piersiowej. To jest pozycja wyjściowa (fot. 1). Zginaj ramiona i
            łokcie, aż delikatnie dotkniesz czołem do ściany. To jest pozycja końcowa (fot. 2).
            Odepchnij się do tyłu do pozycji wyjściowej i powtórz.
          </ContentWrapper>
          <TitleWrapper areaId={2}>
            <XRay />
          </TitleWrapper>
          <ContentWrapper areaId={2}>
            Jest to pierwszy etap w zestawie prowadzącym do mistrzowskiego opanowania ćwiczeń z
            rodziny pompek. Skoro pierwszy, wersja ta jest najłatwiejsza. Każdy człowiek, mający
            władanie nad swoim ciałem, powinien być w stanie wykonać ją bez problemu. Jest to
            również pierwszy element w sekwencji terapeutycznej pompek. Ćwiczenie to jest bardzo
            korzystne dla osoby odzyskującej sprawność po kontuzji lub operacji, kiedy dąży do
            wzmocnienia zdrowia i stopniowego odbudowania siły. Łokcie, nadgarstki i barki
            (zwłaszcza delikatne mięśnie pierścienia rotatorów) są szczególnie narażone na ostre lub
            przewlekłe urazy. Ćwiczenie to łagodnie aktywizuje te obszary, pobudzając je oraz
            zwiększając ukrwienie i napięcie toniczne. Nowicjusze w sztuce kalisteniki powinni
            wchodzić w każdy program treningowy bardzo płynnie, tak by wyrobić odpowiednią technikę
            i umiejętności. Dlatego nie wolno pomijać tego ćwiczenia.
          </ContentWrapper>
          <TitleWrapper areaId={3}>
            <Goal />
          </TitleWrapper>
          <ContentWrapper areaId={3}>
            <Goals>
              <div>Próg początkowy:</div>
              <div>1 seria 10 powtórzeń</div>
              <div>Próg średniozaawansowany:</div>
              <div>2 serie po 25 powtórzeń</div>
              <div>Próg przejścia:</div>
              <div>3 serie po 50 powtórzeń</div>
            </Goals>
          </ContentWrapper>
          <TitleWrapper areaId={4}>
            <Improving />
          </TitleWrapper>
          <ContentWrapper areaId={4}>
            Każdy, kto czyta tę książkę, powinien być w stanie wykonać opisywane ćwiczenie, chyba że
            jest niepełnosprawny, ciężko kontuzjowany lub chory. W okresie odzyskiwania zdrowia po
            urazie czy operacji ćwiczenie to jest czułym miernikiem, pozwalającym zawodnikowi poznać
            słabsze obszary wymagające rehabilitacji.
          </ContentWrapper>
          <PhotoWrapper areaId={1}>
            <img src={photo1} alt="photo1" />
          </PhotoWrapper>
          <PhotoWrapper areaId={2}>
            <img src={photo1} alt="photo1" />
          </PhotoWrapper>
        </MainContainer>
        <Arrow>
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </Wrapper>
    </>
  )
}
