import React, { useState, useRef } from 'react'
import { Redirect } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Links } from '../../../Types/Enums/enumsList'
import {
  StyledForm,
  StyledTitle,
  StyledInput,
  ButtonWrapper,
  ButtonRight,
  ButtonLeft,
} from '../Initialization.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { WarningMessage } from '../WarningMessage'

interface IDetailProps {
  handleRedirectToApp: () => void
}

export const RegisterPage: React.FC<IDetailProps> = (props) => {
  const [redirectToLogin, setRedirectToLogin] = useState<boolean>(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const refPasswordInput = useRef<HTMLInputElement>(null)

  const handleClickVisiblePassword = () => {
    if (isVisible) refPasswordInput.current?.setAttribute('type', 'password')
    else refPasswordInput.current?.setAttribute('type', 'text')
    setIsVisible(!isVisible)
  }

  const [isVisible2, setIsVisible2] = useState<boolean>(false)
  const refPasswordInput2 = useRef<HTMLInputElement>(null)

  const handleClickVisiblePassword2 = () => {
    if (isVisible2) refPasswordInput2.current?.setAttribute('type', 'password')
    else refPasswordInput2.current?.setAttribute('type', 'text')
    setIsVisible2(!isVisible2)
  }

  if (redirectToLogin) return <Redirect to={Links.LOGIN} />
  return (
    <Formik
      initialValues={{
        userName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      }}
      validationSchema={Yup.object({
        userName: Yup.string()
          .min(3, 'Imię nie może być krótsze od 3 liter')
          .max(20, 'Imię nie może być dłuższe niż 20 znaków')
          .required('Pole jest wymagane'),
        email: Yup.string()
          .email('Wpisane dane nie są adresem email')
          .required('Pole jest wymagane'),
        password: Yup.string()
          .min(6, 'Hasło musi składać się z conajmniej 6 znaków')
          .required('Pole jest wymagane'),
        passwordConfirmation: Yup.string()
          .min(6, 'Hasło musi składać się z conajmniej 6 znaków')
          .required('Pole jest wymagane')
          .oneOf([Yup.ref('password'), null], 'Podane hasło jest niezgodne z powyższym'),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
        // props.handleRedirectToApp()
      }}
    >
      {(formik) => (
        <StyledForm>
          <StyledTitle>Dołącz do nas</StyledTitle>
          <StyledInput
            isValid={
              formik.errors.userName === undefined || formik.touched.userName === undefined
                ? true
                : false
            }
          >
            <div className="title">
              <span className="label">Imię</span>
              <ErrorMessage name="userName" render={(msg) => <WarningMessage text={msg} />} />
            </div>
            <Field type="text" name="userName" placeholder="Wpisz imię..." />
            <span className="focus"></span>
          </StyledInput>

          <StyledInput
            isValid={
              formik.errors.email === undefined || formik.touched.email === undefined ? true : false
            }
          >
            <div className="title">
              <span className="label">Adres email</span>
              <ErrorMessage name="email" render={(msg) => <WarningMessage text={msg} />} />
            </div>

            <Field type="text" name="email" placeholder="Podaj adres email..." />
            <span className="focus"></span>
          </StyledInput>

          <StyledInput
            isValid={
              formik.errors.password === undefined || formik.touched.password === undefined
                ? true
                : false
            }
          >
            <div className="title">
              <span className="label">Hasło</span>
              <ErrorMessage name="password" render={(msg) => <WarningMessage text={msg} />} />
            </div>
            <div className="password">
              <Field
                type="password"
                name="password"
                innerRef={refPasswordInput}
                placeholder="******"
              />
              <span className="focus"></span>
              <FontAwesomeIcon
                icon={isVisible ? faEyeSlash : faEye}
                onClick={() => handleClickVisiblePassword()}
              />
            </div>
            <span className="focus"></span>
          </StyledInput>

          <StyledInput
            isValid={
              formik.errors.passwordConfirmation === undefined ||
              formik.touched.passwordConfirmation === undefined
                ? true
                : false
            }
          >
            <div className="title">
              <span className="label">Powtórz hasło</span>
              <ErrorMessage name="passwordConfirmation" render={(msg) => <WarningMessage text={msg} />} />
            </div>
            <div className="password">
              <Field
                type="password"
                name="passwordConfirmation"
                innerRef={refPasswordInput2}
                placeholder="******"
              />
              <span className="focus"></span>
              <FontAwesomeIcon
                icon={isVisible2 ? faEyeSlash : faEye}
                onClick={() => handleClickVisiblePassword2()}
              />
            </div>
          </StyledInput>
          <ErrorMessage name="passwordConfirmation" />

          <ButtonWrapper>
            <ButtonLeft disabled={!formik.isValid} isValid={formik.isValid} type="submit">
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
      )}
    </Formik>
  )
}
