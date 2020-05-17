import React, { useState, useRef } from 'react'

import { Redirect } from 'react-router-dom'

import { Formik, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import { Links } from '../../../Types/Enums/enumsList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLongArrowAltRight,
  faEye,
  faEyeSlash,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons'
import {
  StyledForm,
  StyledTitle,
  StyledInput,
  ButtonWrapper,
  ButtonRight,
  ButtonLeft,
} from '../Initialization.styles'
import { WarningMessage } from '../WarningMessage'

interface FormValues {
  email: string
  password: string
}

interface IDetailProps {
  handleRedirectToApp: () => void
}

export const LoginPage: React.FC<IDetailProps> = (props) => {
  const [redirectToRegister, setRedirectToRegister] = useState<boolean>(false)

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const refPasswordInput = useRef<HTMLInputElement>(null)

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
        password: Yup.string().max(20, 'Must be 20 characters or less').required('Pole jest wymagane'),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2))
        props.handleRedirectToApp()
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
              <ErrorMessage name="email" render={msg=><WarningMessage text={msg}/>} />
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
              <ErrorMessage name="password" render={msg=><WarningMessage text={msg}/>} />
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
            <ButtonLeft disabled={!formik.isValid} isValid={formik.isValid} type="submit">
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
      )}
    </Formik>
  )
}
