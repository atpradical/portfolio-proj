import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";

const Experience = styled.div`
  max-width: 710px;
  padding: 0 10px;
  
  & ${SectionTitle} {
    margin: 40px 0 40px;
    text-align: start;

    &::after {
      display: none;
  }
`

export const S = {
    Experience
}