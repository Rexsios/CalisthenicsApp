import styled from "styled-components"

export const StyledWrapper = styled.div`
  display: flex;
`

export const StyledImageWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: calc(100% - 520px);
  position: relative;
  z-index: 1;
`

export const StyledFormWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fff;
  border-radius: 2px;
  position: relative;
  padding: 40px 10px;
  @media (min-width: 768px) {
    width: 520px;
    padding: 50px;
  }
`
