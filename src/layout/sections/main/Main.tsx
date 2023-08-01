import React from 'react';
import photo from "assets/img/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";

export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <TitleText>Hi 👋,</TitleText>
                        <TitleText>My name is</TitleText>
                        <Name>Ivan Dolgikh</Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="Ivan Dolgikh"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.section`
  min-height: 50vh;
  display: flex;
`

const MainTitle = styled.h1`
  color: ${theme.colors.titleFont};
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const TitleText = styled.h2`
  color: ${theme.colors.titleFont};
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
`

const Name = styled.h2`
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;

  background-image: ${theme.colors.gradient90};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  
  &::before {
    content: "";
    width: 370px;
    height: 370px;
    background-color: green;
    border-radius: 50%;
    background-image: ${theme.colors.gradient0};
    
    position: absolute;
    z-index: -1;
    left: -10.5px;
    top: -10.5px;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
  filter: grayscale(90%);
`
