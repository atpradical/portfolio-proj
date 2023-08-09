import React, {FC} from 'react';
import {Company} from "./company/Company";
import {Location} from "./location/Location";
import {Period} from "./period/Period";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from "./Card_Styles"

type CardPropsType = {
    title: string
    activity: string
    companyName: string
    companyLocation?: string
    period: string
}

export const Card: FC<CardPropsType> = ({title, companyName, companyLocation, period, activity}) => {
    return (
        <S.Card>
            <S.CardSection>
                <FlexWrapper justify={"space-between"}>
                    {title && <S.CardTitle>{title}</S.CardTitle>}
                    {title && <S.Activity>{activity}</S.Activity>}
                </FlexWrapper>
            </S.CardSection>
            <S.CardSection>
                <FlexWrapper justify={"space-between"} id={"section-column"} wrap={"wrap"}>
                    {companyName && <Company companyName={companyName}/>}
                    {companyLocation && <Location companyLocation={companyLocation}/>}
                    {period && <Period period={period}/>}
                </FlexWrapper>
            </S.CardSection>
        </S.Card>
    );
};


