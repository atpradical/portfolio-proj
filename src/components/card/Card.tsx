import React, {FC} from 'react';
import styled from "styled-components";
import {Company} from "./company/Company";
import {Location} from "./location/Location";
import {Period} from "./period/Period";
import {FlexWrapper} from "../FlexWrapper";

type CardPropsType = {
    title: string
    activity: string
    companyName: string
    companyLocation?: string
    period: string
}

export const Card: FC<CardPropsType> = ({title, companyName, companyLocation, period,activity}) => {
    return (
        <StyledCard>
            <FlexWrapper direction={"column"}>
                <CardSection>
                    <CardTitle>{title}</CardTitle>
                    <Activity>{activity}</Activity>
                </CardSection>
                <CardSection>
                    <Company companyName={companyName}/>
                    <Location companyLocation={companyLocation}/>
                    <Period period={period}/>
                </CardSection>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  background-color: #f694e6;
  border: 1px solid darkred;
`

const CardSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.h3`
  color: royalblue;
`

const Activity = styled.span`
  background: lightgreen;
`


