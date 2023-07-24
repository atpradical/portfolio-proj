import React from 'react';
import {SectionTitle} from "../../../../components/SectionTitle";
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

export const About = () => {
    return (
        <StyledAbout>
            <FlexWrapper direction={"column"}>
                <SectionTitle>About Me</SectionTitle>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
  background-color: #a8b9ef;
`

const Text = styled.p`

`