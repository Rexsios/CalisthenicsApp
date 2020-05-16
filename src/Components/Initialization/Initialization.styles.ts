import styled from "styled-components"
import { constants } from "../../const.styles"

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: Poppins;
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

export const StyledInput = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #dbdbdb;
  margin-bottom: 45px;

  .label {
    font-weight: 600;
    font-size: 18px;
    color: #999999;
    line-height: 1.2;
    padding-left: 2px;
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
      line-height: 1.2;
      font-size: 22px;
      height: 50px;
      color: #555555;
      margin-left: 3px;
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
      content: "";
      display: block;
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.4s;
      background: #d5007d;
      background: linear-gradient(45deg, #aa39d6, rgba(115, 4, 159, 1));
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

export const ButtonLeft = styled.button`
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
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
  background: linear-gradient(180deg, rgba(208, 176, 221, 1) 0%, rgba(115, 4, 159, 1) 100%);
  border-radius: 40px;
  transition: 0.5s ease-in;

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: 0.2s ease-out;
    border: 2px solid rgb(208, 176, 221);
    outline: none;
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
