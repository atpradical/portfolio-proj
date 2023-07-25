import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {CardText} from "../company/Company";

type LocationPropsType = {
    companyLocation?: string;
}

export const Location = (props: LocationPropsType) => {
    return (
        <StyledLocation>
            <Icon iconId={"location"} iconWidth={"16px"} iconHeight={"12px"} iconViewBox={"0 0 16px 12px"}/>
            <CardText>{props.companyLocation}</CardText>
        </StyledLocation>
    );
};

const StyledLocation = styled.div`

`

