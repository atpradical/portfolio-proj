import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";
import officeBuilding from "assets/img/prog-img/office-building.svg";


type CompanyPropsType = {
    companyName: string;
}

export const Company = (props: CompanyPropsType) => {
    return (
        <StyledCompany>
            <CardText>{props.companyName}</CardText>
        </StyledCompany>
    );
};

const StyledCompany = styled.span`
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
`

export const CardText = styled.span`
  color: ${theme.colors.cardTextFont};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 1px;
`