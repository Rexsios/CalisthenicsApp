import React, { useState, useRef } from 'react'

import { Redirect } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Links } from '../../../Types/Enums/enumsList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import {
  StyledForm,
  StyledTitle,
  StyledInput,
  ButtonWrapper,
  ButtonRight,
  ButtonLeft,
  InitSpinner,
} from '../Initialization.styles'
import { WarningMessage } from '../WarningMessage'
import { LoginData } from '../../../Types/Interfaces/InterfecesList'

interface FormValues {
  email: string
  password: string
}

interface IDetailProps {
  loading: boolean
  handleLogin: (login: LoginData) => void
}

export const LoginPage: React.FC<IDetailProps> = (props) => {
  const [redirectToRegister, setRedirectToRegister] = useState<boolean>(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const refPasswordInput = useRef<HTMLInputElement>(null)

  const { loading } = props

  const handleClickVisiblePassword = () => {
    if (isVisible) refPasswordInput.current?.setAttribute('type', 'password')
    else refPasswordInput.current?.setAttribute('type', 'text')
    setIsVisible(!isVisible)
  }

  if (redirectToRegister) return <Redirect to={Links.REGISTER} />
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email adress').required('Pole jest wymagane'),
        password: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .min(6, 'Hasło musi składać się z conajmniej 6 znaków')
          .required('Pole jest wymagane'),
      })}
      onSubmit={(values) => {
        props.handleLogin(values)
      }}
    >
      {(formik) => (
        <StyledForm>
          <StyledTitle>Zaloguj się</StyledTitle>
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
          </StyledInput>

          <ButtonWrapper>
            {loading ? (
              <InitSpinner color="#73049f" />
            ) : (
              <ButtonLeft disabled={!formik.isValid} isValid={formik.isValid} type="submit">
                Zaloguj
              </ButtonLeft>
            )}

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
      )}
    </Formik>
  )
}
