import styled from "styled-components";
import officeBuilding from "assets/img/prog-img/office-building.svg";
import {theme} from "styles/Theme";

const Company = styled.span`
  padding-left: 20px;
  width: 40%;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url(${officeBuilding});
    background-repeat: no-repeat;
    bottom: 1px;
    left: 0;
  }

  @media ${theme.media.mobile} {
    max-width: 520px;
    width: 100%;
  }
`

const CardText = styled.span`
  color: ${theme.colors.cardTextFont};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
`

export const SC = {
    Company,
    CardText
}