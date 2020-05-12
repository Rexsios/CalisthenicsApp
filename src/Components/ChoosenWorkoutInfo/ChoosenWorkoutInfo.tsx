import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"

import {
  TitleStyled,
  Goals,
  LastStyledRomanNumber,
  StyledAchive,
  StyledPhotoSpinner,
} from "./ChoosenWorkoutInfo.styles"

import { singleWorkout, WorkoutData } from "../../Types/Interfaces/InterfecesList"
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
import RomanNumerals from "../../Types/Classes/RomanNumerals"
import { WhichWorkout } from "../../Types/Enums/enumsList"
import { ContentSvg } from "../../Assets/Svg/ChoosenWorkoutInfo/ContentSvg"
import { SpinnerForExerciseInfoPanel } from "../UI/SpinnerForExerciseInfoPanel/SpinnerForExerciseInfoPanel"
import WorkoutSvg from "../../Assets/Svg/SingleWorkoutManage/WorkoutSvg"

interface IDetailProps {
  loading: boolean
  singleWorkout: singleWorkout
  achiveLvl: number
  workoutDataInfo: WorkoutData | null
  photosUrl: string[]
  handleExactWorkout: (id: WhichWorkout, lvl: number, name: string, achivedLvl: number) => void
}

export const ChoosenWorkoutInfo: React.FC<IDetailProps> = (props) => {
  let { singleWorkout, achiveLvl, loading, workoutDataInfo, photosUrl } = props
  let showArrayOfNumbers: JSX.Element[] = []
  let reachedLvl = false
  let currentLvl = false
  let reachedLvlForSvg = false
  let minLvl = false
  let maxLvl = false

  //List of levels show
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
          disabled={currentLvl}
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
          disabled={currentLvl}
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

  //ContentShow

  let showContent: JSX.Element[] = []
  let showData = null
  let colorArray = ["#f7a518", "#186af7", "#f72318", "#ce18f7"]
  for (let i = 1; i < 5; i++) {
    if (loading) {
      showData = (
        <p>
          <SpinnerForExerciseInfoPanel color={colorArray[i - 1]} />
        </p>
      )
    } else {
      if (i === 1) {
        showData = <p>{workoutDataInfo?.execution}</p>
      } else if (i === 2) {
        showData = <p>{workoutDataInfo?.xray}</p>
      } else if (i === 3) {
        showData = (
          <Goals>
            <div>Próg podstawowy:</div>
            <div>{workoutDataInfo?.goals.beginner}</div>
            <div>Próg średni:</div>
            <div>{workoutDataInfo?.goals.medium}</div>
            <div>Próg przejścia:</div>
            <div>{workoutDataInfo?.goals.transition}</div>
          </Goals>
        )
      } else if (i === 4) {
        showData = <p>{workoutDataInfo?.improvment}</p>
      }
    }
    showContent.push(
      <React.Fragment key={`Content${i}`}>
        <TitleWrapper areaId={i}>
          <ContentSvg ids={i} />
        </TitleWrapper>
        <ContentWrapper areaId={i} isLoading={loading}>
          {showData}
        </ContentWrapper>
      </React.Fragment>
    )
  }
  //Photos

  let showPhoto = null

  if (loading) {
    showPhoto = (
      <>
        <PhotoWrapper areaId={1}>
          <StyledPhotoSpinner color="#494949" />
        </PhotoWrapper>
        <PhotoWrapper areaId={2}>
          <StyledPhotoSpinner color="#494949" />
        </PhotoWrapper>
      </>
    )
  } else {
    showPhoto = (
      <>
        <PhotoWrapper areaId={1}>
          <img src={photosUrl[0]} alt={workoutDataInfo?.title} />
        </PhotoWrapper>
        <PhotoWrapper areaId={2}>
          <img src={photosUrl[1]} alt={workoutDataInfo?.title} />
        </PhotoWrapper>
      </>
    )
  }

  //Title
  let titleSVG = <WorkoutSvg id={singleWorkout.id} />
  let titleInscription: string | null = null
  if (workoutDataInfo !== null) {
    titleInscription = workoutDataInfo.title
  }
  return (
    <>
      <Header>
        <StyledAchive reachedLvl={reachedLvlForSvg} />
        <TitleStyled
          inscription={titleInscription}
          number={singleWorkout.level}
          svg={titleSVG}
          loading={loading}
        />
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

          {showContent}

          {showPhoto}
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
