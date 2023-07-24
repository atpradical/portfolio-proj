import React from 'react';
import photo from "../../../assets/img/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {About} from "./about/About";
import {Experience} from "./experience/Experience";

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
            <About/>
            <Experience/>
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
