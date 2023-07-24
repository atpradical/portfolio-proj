import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {CardText} from "../company/Company";

type LocationPropsType = {
    iconId: string;
    location: string;
}

export const Location = (props: LocationPropsType) => {
    return (
        <StyledLocation>
            <Icon iconId={props.iconId}/>
            <CardText>{props.location}</CardText>
        </StyledLocation>
    );
};

const StyledLocation = styled.div`

`

