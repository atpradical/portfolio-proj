import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";

type CompanyPropsType = {
    companyName: string;
}

export const Company = (props: CompanyPropsType) => {
    return (
        <StyledCompany>
            <Icon iconId={"officeBuilding"} iconWidth={"16px"} iconHeight={"12px"} iconViewBox={"0 0 16px 12px"}/>
            <CardText>{props.companyName}</CardText>
        </StyledCompany>
    );
};

const StyledCompany = styled.div`

`

export const CardText = styled.span`

`