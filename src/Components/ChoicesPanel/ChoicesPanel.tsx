import React, { useContext } from 'react'
import './ChoicesPanel.scss'
import { Container, Row, Col } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPointer } from '@fortawesome/free-solid-svg-icons'

import { RouteComponentProps } from 'react-router-dom'

import SinglePanel from './SinglePanel/SinglePanel'
import { Links } from '../../Types/Enums/enumsList'
import AuthContext from '../../context/auth-context'

interface IDetailProps extends RouteComponentProps {}

const ChoicesPanel: React.FC<IDetailProps> = (props) => {
  const title = ['Ćwiczenia', 'Poodgląd ćwiczeń', 'Progress']
  const description = [
    'Zapisz swoje postępy i zobacz co dziś należy ćwiczyć.',
    'Przeglądaj wszystykie dostępne ćwiczenia z kalisteniki. Sprawdź co robisz źle oraz jak należy poprawić wykonywane ćwiczenie.',
    'Sprawdź jak idzie twój plan treningowy. Zobacz swój rozwój na wykresie wraz z wszystkimi wpadkami.',
  ]

  const context = useContext(AuthContext)

  return (
    <Container className="choicesPanel">
      <Row className="choicesPanel__titleWraper">
        <Col className="choicesPanel__title">
          <h1 className="choicesPanel__title__text">
            Panel wyboru
            <FontAwesomeIcon icon={faHandPointer} className="choicesPanel__title__icon" />
          </h1>
          <button onClick={context.handleLogout} className="choicesPanel__title__logOut">
            Wyloguj
          </button>
        </Col>
      </Row>
      <Row className="choicesPanel__choices">
        <Col md={4}>
          <SinglePanel
            {...props}
            number="0"
            title={title[0]}
            description={description[0]}
            link={Links.TRAINING}
          />
        </Col>
        <Col md={4}>
          <SinglePanel
            {...props}
            number="1"
            title={title[1]}
            description={description[1]}
            link={Links.INFORMATION}
          />
        </Col>
        <Col md={4}>
          <SinglePanel
            {...props}
            number="2"
            title={title[2]}
            description={description[2]}
            link={Links.PROGRESS}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default ChoicesPanel
