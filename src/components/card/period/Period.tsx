import React from 'react';
import styled from "styled-components";
import {CardText} from "../company/Company";
import calendar from "assets/img/prog-img/calendar.svg";

type PeriodPropsType = {
    period: string;
}

export const Period = (props: PeriodPropsType) => {
    return (
        <StyledPeriod>
            <CardText>{props.period}</CardText>
        </StyledPeriod>
    );
};

const StyledPeriod = styled.span`
  align-self: end;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url(${calendar});
    background-repeat: no-repeat;
    bottom: 1px;
    left: -20px;
`