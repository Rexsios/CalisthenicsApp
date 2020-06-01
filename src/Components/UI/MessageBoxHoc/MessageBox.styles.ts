import styled from 'styled-components'
import { constants } from '../../../const.styles'

interface IDetailProps {
  isGood: boolean
}

export const MessageBoxWrapper = styled.div<IDetailProps>`
  width: 100%;
  color: #fff;
  padding: 10px 20px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: ${({ isGood }) => (isGood ? 'green' : constants.buttonNoReachColor)};

  h4 {
    text-align: center;
    font-size: 20px;
    margin: 5px 0;
  }

  svg {
    width: 50%;
    font-size: 30px;
    margin-left: 20px;
    color: ${({ isGood }) => (isGood ? 'yellow' : 'white')};
  }
`
