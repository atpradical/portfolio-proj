import React from 'react';
import styled from "styled-components";
import {Company} from "./company/Company";
import {Location} from "./location/Location";
import {Period} from "./period/Period";
import {FlexWrapper} from "../FlexWrapper";

type CardPropsType = {
    title: string;
    activity: string;
    companyName: string;
    companyLocation?: string;
    period: string;
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper direction={"column"}>
                <CardSection>
                    <CardTitle>{props.title}</CardTitle>
                    <Activity>{props.activity}</Activity>
                </CardSection>
                <CardSection>
                    <Company companyName={props.companyName}/>
                    <Location companyLocation={props.companyLocation}/>
                    <Period period={props.period}/>
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


