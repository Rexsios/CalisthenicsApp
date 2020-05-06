import styled from "styled-components"

interface IDetailProps {
  color: string
}

export const StyledSpinner = styled.svg<IDetailProps>`
  animation: rotate 2s linear infinite;
  height: 100%;
  grid-area: title;
  justify-self:center;

  & .path {
    stroke: ${props=>props.color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`
