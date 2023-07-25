import React from 'react';
import photo from "../../../assets/img/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {About} from "./about/About";
import {Experience} from "./experience/Experience";
import {Education} from "./education/Education";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <MainStyled>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi 👋,</span>
                    <Name>I am Ivan Dolgikh</Name>
                    <MainTitle>A web developer.</MainTitle>
                </div>
                <Photo src={photo} alt="Ivan Dolgikh"/>
            </FlexWrapper>
            <FlexWrapper align={"center"}>
                <div>
                    <About/>
                    <Experience/>
                    <Education/>
                </div>
                <Icon iconId={"drawing"} iconWidth={"835px"} iconHeight={"835px"} iconViewBox={"0 0 835px 835px"}/>
            </FlexWrapper>
        </MainStyled>
    );
};

const MainStyled = styled.div`
  min-height: 50vh;
  background-color: #f3e5a7;
`
const MainTitle = styled.h1`
`

const Name = styled.h2`
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
`
