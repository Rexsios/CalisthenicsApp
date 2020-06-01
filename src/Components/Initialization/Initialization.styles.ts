import styled, { keyframes } from 'styled-components'
import { constants } from '../../const.styles'
import { Form } from 'formik'

import {SpinnerForExerciseInfoPanel} from '../UI/SpinnerForExerciseInfoPanel/SpinnerForExerciseInfoPanel'

export const StyledForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: Poppins;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

export const StyledTitle = styled.span`
  display: block;
  width: 100%;
  font-weight: 700;
  font-size: 39px;
  color: #333333;
  line-height: 1.2;
  text-align: left;
  padding-bottom: 60px;
`

interface IDetailPropsInput {
  isValid: boolean
}

export const StyledInput = styled.div<IDetailPropsInput>`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #dbdbdb;
  margin-bottom: 45px;

  .label {
    font-weight: 600;
    font-size: 18px;
    color: #999999;
    padding-left: 2px;
    align-self: center;
    line-height: 2;
  }

  .title {
    display: flex;
  }

  input {
    display: block;
    border: none;
    height: 50px;
    background: transparent;
    font-weight: 400;
    font-size: 22px;
    width: 100%;
    color: #555555;
    line-height: 1.2;
    padding: 0 2px;

    &:focus {
      outline: none;
    }
  }

  .password {
    display: flex;

    svg {
      font-size: 22px;
      height: 50px;
      color: #555555;
      &:hover,
      &:focus {
        cursor: pointer;
      }
    }
  }

  input:-webkit-autofill {
    box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #555555;
  }

  input:-webkit-autofill:focus {
    box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #555555;
  }

  input:focus + .focus:before {
    width: 100%;
  }

  .focus {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: ${({ isValid }) => (isValid ? '0' : '100%')};
      height: 2px;
      transition: all 0.4s;
      background: ${({ isValid }) =>
        isValid
          ? 'linear-gradient(45deg, #aa39d6, rgba(115, 4, 159, 1))'
          : constants.buttonNoReachColor};
    }
  }
`

interface IDetailPropsWarningMessage {
  isVisible: boolean
}

const fadeIn = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`

export const StyledWarningMessage = styled.div<IDetailPropsWarningMessage>`
  margin-left: auto;
  font-size: 24px;
  margin-right: 3px;
  color: ${constants.buttonNoReachColor};
  animation: ${fadeIn} 0.3s linear;

  p {
    display: flex;
    background-color: ${constants.buttonNoReachColor};
    padding: 10px;
    border-radius: 30px;
    max-width: 200px;
    font-size: 14px;
    color: white;
    position: absolute;
    right: 40px;
    top: 0;
    justify-content: center;
    text-align: center;
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
    transition: 0.5s ease-out;
    cursor: ${({ isVisible }) => (isVisible ? 'pointer' : 'default')};
    z-index:${({ isVisible }) => (isVisible ? '10' : '-1')};

    &:after {
      content: '';
      bottom: 20px;
      right: -16px;
      width: 30px;
      height: 30px;
      box-shadow: -10px 40px 0 -10px ${constants.buttonNoReachColor};
      background-color: ${constants.buttonNoReachColor};
      border-radius: 50%;
      display: block;
      position: absolute;
      cursor: ${({ isVisible }) => (isVisible ? 'pointer' : 'default')};
    }
  }

  span {
    &:hover {
      cursor: pointer;
    }
  }
`

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

interface IDetailPropsLeftButton {
  isValid: boolean
}

export const ButtonLeft = styled.button<IDetailPropsLeftButton>`
  border: none;
  padding: 0;
  font: inherit;
  cursor: ${({ isValid }) => (isValid ? 'pointer' : 'auto')};
  outline: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  min-width: 244px;
  height: 50px;
  font-size: 16px;
  line-height: 1.2;
  color: white;
  background: rgb(208, 176, 221);
  background: ${({ isValid }) =>
    isValid
      ? 'linear-gradient(180deg, rgba(208, 176, 221, 1) 0%, rgba(115, 4, 159, 1) 100%)'
      : 'rgba(208, 176, 221, 1)'};
  border-radius: 40px;
  transition: 0.5s ease-in;

  &:hover,
  &:focus {
    ${({ isValid }) => {
      if (isValid) {
        return `
          transform: scale(1.1);
          border: 2px solid rgb(208, 176, 221);
          outline: none;
        `
      }
    }}

    transition: 0.5s ease-out;
  }
`

export const ButtonRight = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  color: #555555;
  transition: 0.2s ease-out;
  margin-top: 20px;
  &:hover,
  &:focus {
    color: ${constants.mainColor2};
    transform: scale(1.1);
    transition: 0.2s ease-out;
    outline: none;
  }

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-top: 0;
  }
  svg {
    margin-left: 10px;
  }
`

export const InitSpinner = styled(SpinnerForExerciseInfoPanel)`
margin:0 auto;
color:${constants.mainColor2};
width:30%;`
