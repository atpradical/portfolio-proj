import styled from "styled-components";
import {theme} from "styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Slide = styled.div`
  padding: 20px;
  text-align: center;
  margin: 20px 0;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
`

const Name = styled.span`
  display: inline-block;
  margin: 20px 0 0;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
  
    border-radius: 50%;
    background-color: ${theme.colors.lightFont};
    
    & + span {
      margin: 5px;
    }
    
    &.active {
      margin: 5px;
      background-color: ${theme.colors.titleFont};
    }
  }
`

export const S = {
    Slider,
    Slide,
    Name,
    Pagination
}