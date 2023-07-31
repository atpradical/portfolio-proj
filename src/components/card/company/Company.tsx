import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {theme} from "styles/Theme";

type CompanyPropsType = {
    companyName: string;
}

export const Company = (props: CompanyPropsType) => {
    return (
        <StyledCompany>
            <Icon iconId={"officeBuilding"} iconWidth={"18px"} iconHeight={"11px"} iconViewBox={"0 0 10px 8px"}/>
            <CardText>{props.companyName}</CardText>
        </StyledCompany>
    );
};

const StyledCompany = styled.div`

`

export const CardText = styled.span`
  color: ${theme.colors.cardTextFont};
  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  letter-spacing: 1px;
`