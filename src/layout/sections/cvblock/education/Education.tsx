import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Card} from "components/card/Card";

export const Education = () => {
    return (
        <StyledEducation>
            <SectionTitle>Education</SectionTitle>
            <Card title={"Bachelor in Electronics & Communication"}
                  activity={"Full Time"}
                  companyName={"Bangalore Instutute of Technology"}
                  period={"Aug 2015 - Dec 2020"}/>
        </StyledEducation>
    );
};

const StyledEducation = styled.section`
  max-width: 710px;
`