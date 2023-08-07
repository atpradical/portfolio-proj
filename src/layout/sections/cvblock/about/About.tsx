import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import styled from "styled-components";
import {Text} from "components/Text";
import {theme} from "styles/Theme";
import {font} from "styles/Common";


export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle>About Me</SectionTitle>
            <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                your future website. It helps you to combine slides, panels and other components and export it as a
                set of static files: HTML/CSS/JS.</Text>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
  max-width: 710px;
  padding: 0 10px;
  margin-bottom: 20px;

  & ${SectionTitle} {
    margin: 40px 0 40px;
    font-size: 42px;
    text-align: start;

    &::after {
      display: none;
    }
  }
`
