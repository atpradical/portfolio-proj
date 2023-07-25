import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {About} from "./about/About";
import {Experience} from "./experience/Experience";
import {Education} from "./education/Education";
import {Icon} from "../../../components/icon/Icon";

export const CvBlock = () => {
    return (
        <StyledCvBlock>
            <FlexWrapper align={"center"}>
                <div>
                    <About/>
                    <Experience/>
                    <Education/>
                </div>
                <Icon iconId={"drawing"} iconWidth={"835px"} iconHeight={"835px"} iconViewBox={"0 0 835px 835px"}/>
            </FlexWrapper>
        </StyledCvBlock>
    );
};

const StyledCvBlock = styled.section`
  background-color: #e4efb2;
`