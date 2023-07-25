import React from 'react';
import styled from "styled-components";
import {Icon} from "../../icon/Icon";
import {CardText} from "../company/Company";

type PeriodPropsType = {
    period: string;
}

export const Period = (props: PeriodPropsType) => {
    return (
        <StyledPeriod>
            <Icon iconId={"calendar"} iconWidth={"16px"} iconHeight={"12px"} iconViewBox={"0 0 16px 12px"}/>
            <CardText>{props.period}</CardText>
        </StyledPeriod>
    );
};

const StyledPeriod = styled.div`

`