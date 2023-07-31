import React from 'react';
import styled from "styled-components";
import {About} from "./about/About";
import {Experience} from "layout/sections/cvblock/experience/Experience";
import {Education} from "layout/sections/cvblock/education/Education";
import {Container} from "components/Container";
import background from "assets/img/drawing.webp";

export const CvBlock = () => {
    return (
        <StyledCvBlock>
            <Container>
                <About/>
                <Experience/>
                <Education/>
            </Container>
        </StyledCvBlock>
    );
};

const StyledCvBlock = styled.section`


  // &::after {
  //   content: "";
  //   position: absolute;
  //   width: 40%;
  //   height: 100%;
  //   top: 0;
  //   right: 0;
  //   z-index: 1;
  //   background-image: url(${background});
  //   background-position: right;
  //   background-size: cover;
  //   background-repeat: no-repeat;

  }

  
  
`