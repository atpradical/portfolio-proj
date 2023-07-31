import React, {FC} from 'react';
import styled from "styled-components";
import {Company} from "./company/Company";
import {Location} from "./location/Location";
import {Period} from "./period/Period";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "styles/Theme";

type CardPropsType = {
    title: string
    activity: string
    companyName: string
    companyLocation?: string
    period: string
}

export const Card: FC<CardPropsType> = ({title, companyName, companyLocation, period, activity}) => {
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
  //outline: 1px solid red;
  margin-bottom: 30px;
  position: relative;
  
  &::after{
    content:"";
    display: inline-block;
    position: absolute;
    width:100%;
    height: 1px;
    bottom: -5px;
    background-color: ${theme.colors.placeholderColor};
  }
`

const CardSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CardTitle = styled.h3`
  margin-bottom: 5px;
  color: ${theme.colors.cardTitleFont};
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 1px;
`

const Activity = styled.span`
  padding: 2px 20px;
  border-radius: 15px;
  background-color: #D7FFE0;
  color: #018C0F;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
`


