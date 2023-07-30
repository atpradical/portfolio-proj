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
  min-height: 70vh;
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

  background-image: var(--gradient-heading, linear-gradient(90deg, #13B0F5 2.60%, #E70FAA 100%));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const PhotoWrapper = styled.div`
  position: relative;
  
  &::before {
    content: "";
    width: 375px;
    height: 375px;
    background-color: green;
    border-radius: 50%;
    background-image: var(--gradient-heading, linear-gradient(0deg, #13B0F5 2.60%, #E70FAA 100%));
    
    position: absolute;
    z-index: -1;
    left: -12.5px;
    top: -12.5px
  }
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
`
