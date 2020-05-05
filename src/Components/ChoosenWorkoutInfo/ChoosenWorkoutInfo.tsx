import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import photo1 from "../../Assets/Images/photo1.png"
import {
  TitleStyled,
  Goals,
  LastStyledRomanNumber,
  StyledAchive,
} from "./ChoosenWorkoutInfo.styles"

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
import { WhichWorkout } from "../../Types/Enums/enumsList"

interface IDetailProps {
  singleWorkout: singleWorkout
  achiveLvl: number
  handleExactWorkout: (id: WhichWorkout, lvl: number, name: string, achivedLvl: number) => void
}

export const ChoosenWorkoutInfo: React.FC<IDetailProps> = (props) => {
  let { singleWorkout, achiveLvl } = props
  let showArrayOfNumbers: JSX.Element[] = []
  let reachedLvl: boolean = false
  let currentLvl: boolean = false
  let reachedLvlForSvg: boolean = false
  let minLvl: boolean = false
  let maxLvl: boolean = false
  for (let i = 1; i <= 10; i++) {
    if (singleWorkout !== null) {
      if (achiveLvl >= i) reachedLvl = true
      else reachedLvl = false

      if (singleWorkout.level === i) {
        currentLvl = true
        reachedLvlForSvg = reachedLvl
        if (i === 1) minLvl = true
        if (i === 10) maxLvl = true
      } else currentLvl = false
    }

    if (i !== 10) {
      showArrayOfNumbers.push(
        <StyledRomanNumber
          reachedLvl={reachedLvl}
          choosenLvl={currentLvl}
          key={`StyledRomanNumber${i}`}
          onClick={() =>
            props.handleExactWorkout(singleWorkout.id, i, singleWorkout.name, achiveLvl)
          }
        >
          {RomanNumerals.roman(i)}
        </StyledRomanNumber>
      )
    } else {
      showArrayOfNumbers.push(
        <LastStyledRomanNumber
          reachedLvl={reachedLvl}
          choosenLvl={currentLvl}
          key={`StyledRomanNumber${i}`}
          onClick={() =>
            props.handleExactWorkout(singleWorkout.id, i, singleWorkout.name, achiveLvl)
          }
        >
          <h4>MASTER</h4>
        </LastStyledRomanNumber>
      )
    }
  }

  return (
    <>
      <Header>
        <StyledAchive reachedLvl={reachedLvlForSvg} />
        <TitleStyled />
      </Header>
      <Wrapper>
        <Arrow
          areaId={1}
          avaliable={!minLvl}
          disabled={minLvl}
          onClick={() =>
            props.handleExactWorkout(
              singleWorkout.id,
              singleWorkout.level - 1,
              singleWorkout.name,
              achiveLvl
            )
          }
        >
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
              <div>Próg środkowy:</div>
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
        <Arrow
          areaId={2}
          avaliable={!maxLvl}
          disabled={maxLvl}
          onClick={() =>
            props.handleExactWorkout(
              singleWorkout.id,
              singleWorkout.level + 1,
              singleWorkout.name,
              achiveLvl
            )
          }
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Arrow>
      </Wrapper>
    </>
  )
}
