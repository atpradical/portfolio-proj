import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../../components/SectionTitle";
import {Card} from "../../../../components/card/Card";

export const Experience = () => {
    return (
        <StyledExperience>
            <SectionTitle>Work Experience</SectionTitle>
            <Card title={"Junior Web Developer"}
                  activity={"Full Time"}
                  name={"Dr. Rajkumar’s Learning App"}
                  location={"Bengaluru"}
                  period={"Sep 2021 - Dec 2021"}/>
            <Card title={"Web Development Intern"}
                  activity={"Internship"}
                  name={"IonPixelz Web Solutions"}
                  location={"Bengaluru"}
                  period={"Sep 2021 - Dec 2021"}/>
            <Card title={"SEO / SEM Specialist"}
                  activity={"Internship"}
                  name={"HAAPS"}
                  location={"Bengaluru"}
                  period={"Sep 2021 - Dec 2021"}/>
        </StyledExperience>
    );
};

const StyledExperience = styled.section`

`
