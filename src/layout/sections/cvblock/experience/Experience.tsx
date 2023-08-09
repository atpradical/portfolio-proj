import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import {Card} from "components/card/Card";
import {S} from "./Experience_Styles"

const cardData = [
    {
        title: "Junior Web Developer",
        activity: "Full Time",
        companyName: "Dr. Rajkumar’s Learning App",
        companyLocation: "Bengaluru",
        period: "Sep 2021 - Dec 2021"
    },
    {
        title: "Web Development Intern",
        activity: "Internship",
        companyName: "IonPixelz Web Solutions",
        companyLocation: "Bengaluru",
        period: "Sep 2021 - Dec 2021"
    },
    {
        title: "SEO / SEM Specialist",
        activity: "Internship",
        companyName: "HAAPS",
        companyLocation: "Bengaluru",
        period: "Sep 2021 - Dec 2021"
    },

]

export const Experience: React.FC = () => {
    return (
        <S.Experience>
            <SectionTitle>Work Experience</SectionTitle>

            {cardData.map((c, index) => {
                return (
                    <Card key={index} title={c.title}
                          activity={c.activity}
                          companyName={c.companyName}
                          companyLocation={c.companyLocation}
                          period={c.period}/>
                )
            })}
        </S.Experience>
    );
};