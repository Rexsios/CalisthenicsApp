import styled from "styled-components"
import Cloud from "../../Assets/Svg/ChoiceWorkoutPanel/Cloud"

export const ChoiceWorkoutAndLevelContainer = styled.div`
  padding: 3px;
  display: grid;
  min-height: 100vh;
  grid-template-columns: 1fr;
  grid-template-rows: 200px 300px 300px 300px 300px 300px 300px;
    grid-template-areas:
      "title"
      "item1"
      "item2"
      "item3"
      "item4"
      "item5"
      "item6";
  background-color: rgb(47, 46, 51);
  grid-gap: 10px;
  @media (min-width: 768px) {
    max-height:100vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 100px 100px 1fr;
    grid-template-areas:
      "item1 item2 item3"
      "item1 title item3"
      "item4 title item6"
      "item4 item5 item6";
  }
`

export const StyledCloud = styled(Cloud)`
  grid-area: title;
  height: 100%;
  margin: 0 auto;
`
