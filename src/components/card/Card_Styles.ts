import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

const Card = styled.div`
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    background-color: ${theme.colors.placeholderColor};
  }
`

const CardSection = styled.div``

const CardTitle = styled.h3`
  ${font({family: "Poppins", weight: 400, Fmax: 20, Fmin: 12})}
  margin-bottom: 5px;
  color: ${theme.colors.cardTitleFont};
  line-height: 28px;
  letter-spacing: 1px;
`

const Activity = styled.span`

  position: relative;
  z-index: 2;
  margin-left: 30px;
  color: #018C0F;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
  white-space: nowrap;

  &:after {
    content: "";
    position: absolute;
    width: 150%;
    height: 30px;
    left: -50%;
    top: -15%;
    transform: translateX(15%);
    z-index: -1;
    background-color: #D7FFE0;
    border-radius: 15px;
  }
`

export const S = {
    Card,
    CardSection,
    CardTitle,
    Activity
}