import React from 'react';
import styled from "styled-components";
import {Company} from "./company/Company";
import {Location} from "./location/Location";
import {Period} from "./period/Period";
import {FlexWrapper} from "../FlexWrapper";

type CardPropsType = {
    title: string;
    activity: string;
    name: string;
    location: string;
    period: string;
}

export const Card = (props: CardPropsType) => {
    return (
        <StyledCard>
            <FlexWrapper justify={"column"}>
                <CardSection>
                    <CardTitle>{props.title}</CardTitle>
                    <Activity>{props.activity}</Activity>
                </CardSection>
                <CardSection>
                    <Company iconId={"officeBuilding"} name={props.name}/>
                    <Location iconId={"location"} location={props.location}/>
                    <Period iconId={"calendar"} period={props.period}/>
                </CardSection>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard = styled.div`
  background-color: #f694e6;
  min-widht: 550px
  border: 1px solid darkred;
`

const CardSection = styled.section`
  display: flex;
  
`

const CardTitle = styled.h3`
  color: royalblue;
`

const Activity = styled.span`
  width: 70px;
  background: lightgreen;
  color: green;
`


