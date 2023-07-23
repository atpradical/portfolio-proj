import React from 'react';
import photo from "../../../assets/img/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <MainStyled>
            <FlexWrapper align={"center"} justify={"space-around"}>
                <div>
                    <span>Hi 👋,</span>
                    <Name>I am Ivan Dolgikh</Name>
                    <MainTitle>A web developer. </MainTitle>
                </div>
                <Photo src={photo} alt="Ivan Dolgikh"/>
            </FlexWrapper>
        </MainStyled>
    );
};

const MainStyled = styled.div`
  min-height: 100vh;
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
