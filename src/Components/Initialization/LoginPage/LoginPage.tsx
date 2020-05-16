import React, { useState, useRef } from "react"
import { Redirect } from "react-router-dom"
import { Links } from "../../../Types/Enums/enumsList"
import {
  StyledForm,
  StyledTitle,
  StyledInput,
  ButtonWrapper,
  ButtonRight,
  ButtonLeft,
} from "../Initialization.styles"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLongArrowAltRight, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

interface IDetailProps {
  handleRedirectToApp: () => void
}

export const LoginPage: React.FC<IDetailProps> = (props) => {
  const [redirectToRegister, setRedirectToRegister] = useState<boolean>(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const refPasswordInput = useRef<HTMLInputElement>(null)

  const handleClickVisiblePassword = () => {
    if (isVisible) refPasswordInput.current?.setAttribute("type", "password")
    else refPasswordInput.current?.setAttribute("type", "text")
    setIsVisible(!isVisible)
  }

  if (redirectToRegister) return <Redirect to={Links.REGISTER} />
  return (
    <StyledForm>
      <StyledTitle>Zaloguj się</StyledTitle>

      <StyledInput>
        <span className="label">Adres email</span>
        <input type="text" name="email" placeholder="Podaj adres email..." />
        <span className="focus"></span>
      </StyledInput>

      <StyledInput data-validate="Password is required">
        <span className="label">Hasło</span>
        <div className="password">
          <input type="password" name="pass" ref={refPasswordInput} placeholder="******" />
          <span className="focus"></span>
          <FontAwesomeIcon
            icon={isVisible ? faEyeSlash : faEye}
            onClick={() => handleClickVisiblePassword()}
          />
        </div>
      </StyledInput>

      <ButtonWrapper>
        <ButtonLeft
          onClick={(e) => {
            e.preventDefault()
            props.handleRedirectToApp()
          }}
        >
          Zaloguj
        </ButtonLeft>

        <ButtonRight
          onClick={(e) => {
            e.preventDefault()
            setRedirectToRegister(true)
          }}
        >
          Zarejestruj się
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </ButtonRight>
      </ButtonWrapper>
    </StyledForm>
  )
}
