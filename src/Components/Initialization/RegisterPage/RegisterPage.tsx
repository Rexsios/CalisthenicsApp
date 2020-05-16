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
import { faLongArrowAltRight, faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons"

interface IDetailProps {
  handleRedirectToApp: () => void
}

export const RegisterPage: React.FC<IDetailProps> = (props) => {
  const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const refPasswordInput = useRef<HTMLInputElement>(null)

  const handleClickVisiblePassword = () => {
    if (isVisible) refPasswordInput.current?.setAttribute("type", "password")
    else refPasswordInput.current?.setAttribute("type", "text")
    setIsVisible(!isVisible)
  }

  const [isVisible2, setIsVisible2] = useState<boolean>(false)
  const refPasswordInput2 = useRef<HTMLInputElement>(null)

  const handleClickVisiblePassword2 = () => {
    if (isVisible2) refPasswordInput2.current?.setAttribute("type", "password")
    else refPasswordInput2.current?.setAttribute("type", "text")
    setIsVisible2(!isVisible2)
  }

  if (redirectToLogin) return <Redirect to={Links.LOGIN} />
  return (
    <StyledForm>
      <StyledTitle>Dołącz do nas</StyledTitle>

      <StyledInput>
        <span className="label">Imię</span>
        <input type="text" name="name" placeholder="Wpisz imię..." />
        <span className="focus"></span>
      </StyledInput>

      <StyledInput>
        <span className="label">Adres email</span>
        <input type="text" name="email" placeholder="Podaj adres email..." />
        <span className="focus"></span>
      </StyledInput>

      <StyledInput>
        <span className="label">Hasło</span>
        <div className="password">
          <input type="password" name="pass" ref={refPasswordInput} placeholder="******" />
          <span className="focus"></span>
          <FontAwesomeIcon
            icon={isVisible ? faEyeSlash : faEye}
            onClick={() => handleClickVisiblePassword()}
          />
        </div>
        <span className="focus"></span>
      </StyledInput>

      <StyledInput>
        <span className="label">Powtórz hasło</span>
        <div className="password">
          <input type="password" name="pass" ref={refPasswordInput2} placeholder="******" />
          <span className="focus"></span>
          <FontAwesomeIcon
            icon={isVisible2 ? faEyeSlash : faEye}
            onClick={() => handleClickVisiblePassword2()}
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
          Zarejestruj się
        </ButtonLeft>

        <ButtonRight
          onClick={(e) => {
            e.preventDefault()
            setRedirectToLogin(true)
          }}
        >
          Zaloguj
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </ButtonRight>
      </ButtonWrapper>
    </StyledForm>
  )
}
