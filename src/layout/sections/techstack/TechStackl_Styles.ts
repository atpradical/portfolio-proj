import styled from "styled-components";
import {theme} from "styles/Theme";

const TechStack = styled.section`
  position: relative;
`

const Skill = styled.div`
  width: 150px;
  flex-grow: 1;
  margin-bottom: 25px;
  
  @media ${theme.media.mobile}{
    width: 70px;
  }
`

export const S = {
    TechStack,
    Skill
}