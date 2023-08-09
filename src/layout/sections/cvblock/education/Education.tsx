import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import {Card} from "components/card/Card";
import {S} from "./Education_Styled"

export const Education:React.FC = () => {
    return (
        <S.Education>
            <SectionTitle>Education</SectionTitle>
            <Card title={"Bachelor in Electronics & Co."}
                  activity={"Full Time"}
                  companyName={"Bangalore Instutute of Technology"}
                  period={"Aug 2015 - Dec 2020"}/>
        </S.Education>
    );
};