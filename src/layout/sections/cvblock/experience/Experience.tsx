import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {Card} from "components/card/Card";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>Work Experience</SectionTitle>
            <Card title={"Junior Web Developer"}
                  activity={"Full Time"}
                  companyName={"Dr. Rajkumar’s Learning App"}
                  companyLocation={"Bengaluru"}
                  period={"Sep 2021 - Dec 2021"}/>
            <Card title={"Web Development Intern"}
                  activity={"Internship"}
                  companyName={"IonPixelz Web Solutions"}
                  companyLocation={"Bengaluru"}
                  period={"Sep 2021 - Dec 2021"}/>
            <Card title={"SEO / SEM Specialist"}
                  activity={"Internship"}
                  companyName={"HAAPS"}
                  companyLocation={"Bengaluru"}
                  period={"Sep 2021 - Dec 2021"}/>
        </StyledExperience>
    );
};

const StyledExperience = styled.div`
  max-width: 710px;
  padding: 0 10px;
  
  & ${SectionTitle} {
    margin: 40px 0 40px;
    font-size: 42px;
    text-align: start;

    &::after {
      display: none;
  }
`
