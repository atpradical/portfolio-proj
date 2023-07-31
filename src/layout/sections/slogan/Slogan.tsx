import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Button} from "components/Button";
import {FlexWrapper} from "components/FlexWrapper";

export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Button>Hire me</Button>
            </FlexWrapper>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`
  min-height: 15vh;
  background-color: #f8875f;
`