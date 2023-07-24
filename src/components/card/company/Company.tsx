import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";

type CompanyPropsType = {
    iconId: string;
    name: string;
}

export const Company = (props: CompanyPropsType) => {
    return (
        <StyledCompany>
            <Icon iconId={props.iconId}/>
            <CardText>{props.name}</CardText>
        </StyledCompany>
    );
};

const StyledCompany = styled.div`

`

export const CardText = styled.span`
    
`