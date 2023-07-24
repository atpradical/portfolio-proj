import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {CardText} from "../company/Company";

type PeriodPropsType = {
    iconId: string;
    period: string;
}

export const Period = (props: PeriodPropsType) => {
    return (
        <StyledPeriod>
            <Icon iconId={props.iconId}/>
            <CardText>{props.period}</CardText>
        </StyledPeriod>
    );
};

const StyledPeriod = styled.div`

`