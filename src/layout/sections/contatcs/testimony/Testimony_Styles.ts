import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {theme} from "styles/Theme";

const Testimony = styled.section`
  max-width: 500px;
  width:100%;
  margin: 0;
  flex-shrink: 2;
  
  ${SectionTitle} {
    margin-bottom: 55px;
  }
`

export const S = {
    Testimony
}