import React, {FC} from 'react';
import styled from "styled-components";
import {Company} from "./company/Company";
import {Location} from "./location/Location";
import {Period} from "./period/Period";
import {FlexWrapper} from "../FlexWrapper";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

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
            <CardSection>
                <FlexWrapper justify={"space-between"}>
                    {title && <CardTitle>{title}</CardTitle>}
                    {title && <Activity>{activity}</Activity>}
                </FlexWrapper>
            </CardSection>
            <CardSection>
                <FlexWrapper justify={"space-between"} id={"section-column"} wrap={"wrap"}>
                    {companyName && <Company companyName={companyName}/>}
                    {companyLocation && <Location companyLocation={companyLocation}/>}
                    {period && <Period period={period}/>}
                </FlexWrapper>
            </CardSection>
        </StyledCard>
    );
};


const StyledCard = styled.div`
  margin-bottom: 30px;
  position: relative;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -5px;
    background-color: ${theme.colors.placeholderColor};
  }
`

const CardSection = styled.div``

const CardTitle = styled.h3`
  ${font({family: "Poppins", weight: 400, Fmax: 20, Fmin: 12})}
  margin-bottom: 5px;
  color: ${theme.colors.cardTitleFont};
  line-height: 28px;
  letter-spacing: 1px;
`

const Activity = styled.span`

  position: relative;
  z-index: 2;
  margin-left: 30px;
  color: #018C0F;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  text-transform: capitalize;
  white-space: nowrap;

  &:after {
    content: "";
    position: absolute;
    width: 150%;
    height: 30px;
    left: -50%;
    top: -15%;
    transform: translateX(15%);
    z-index: -1;
    background-color: #D7FFE0;
    border-radius: 15px;
  }
`


