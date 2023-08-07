import React from 'react';
import photo from "assets/img/photo.webp"
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

export const Main = () => {
    return (
        <MainStyled>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <TitleText>Hi 👋,</TitleText>
                        <TitleText>My name is</TitleText>
                        <Name>Ivan Dolgikh</Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="portrait of Ivan Dolgikh"/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </MainStyled>
    );
};

const MainStyled = styled.section`
  min-height: 100vh;
  display: flex;
  margin-top: 10%;
`

const MainTitle = styled.h1`
  ${font({family: "Poppins", weight: 700, Fmax: 58, Fmin: 32})}
  color: ${theme.colors.titleFont};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -1px;
  
  @media ${theme.media.mobile} {
    white-space: nowrap;
  }
`

const TitleText = styled.h2`
  ${font({family: "Poppins", weight: 700, Fmax: 58, Fmin: 32})}
  color: ${theme.colors.titleFont};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -1px;

  @media ${theme.media.mobile} {
    white-space: nowrap;
  }
`

const Name = styled.h2`
  ${font({family: "Poppins", weight: 700, Fmax: 58, Fmin: 32})}
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -1px;

  background-image: ${theme.colors.gradient90};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${theme.media.mobile} {
    white-space: nowrap;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 370px;
    height: 370px;
    border-radius: 50%;
    background-image: ${theme.colors.gradient0};

    position: absolute;
    z-index: -1;
    left: -10.5px;
    top: -10.5px;
    
    @media ${theme.media.mobile} {
      width: 330px;
      height: 330px;
      left: -9.5px;
      top: -9.5px;
    }
  }

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    margin: 50px 0;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
  filter: grayscale(90%);

  @media ${theme.media.mobile} {
    width: 310px;
    height: 310px;
  }
`