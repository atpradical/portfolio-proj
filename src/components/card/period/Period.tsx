import React from 'react';
import {S} from "./Period_Styles"
import {SC} from "../company/Company_Styles"

type PeriodPropsType = {
    period: string;
}

export const Period:React.FC<PeriodPropsType> = (props: PeriodPropsType) => {
    return (
        <S.Period>
            <SC.CardText>{props.period}</SC.CardText>
        </S.Period>
    );
};