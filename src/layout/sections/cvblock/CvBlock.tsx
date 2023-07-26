import React from 'react';
import styled from "styled-components";
import {About} from "./about/About";
import {Experience} from "layout/sections/cvblock/experience/Experience";
import {Education} from "layout/sections/cvblock/education/Education";
import background from "assets/img/drawing.webp";

export const CvBlock = () => {
    return (
        <StyledCvBlock>
            <About/>
            <Experience/>
            <Education/>
        </StyledCvBlock>
    );
};

const StyledCvBlock = styled.section`
  background-color: #e4efb2;
  background-image: url(${background});
  background-position: right;
  background-repeat: no-repeat;
`