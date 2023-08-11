import React from 'react';
import {About} from "./about/About";
import {Experience} from "layout/sections/cvblock/experience/Experience";
import {Education} from "layout/sections/cvblock/education/Education";
import {Container} from "components/Container";
import {S} from "./CvBlock_Styles"


export const CvBlock:React.FC = () => {
    return (
        <S.CvBlock id={"cvblock"}>
            <Container>
                <About/>
                <Experience/>
                <Education/>
            </Container>
        </S.CvBlock>
    );
};