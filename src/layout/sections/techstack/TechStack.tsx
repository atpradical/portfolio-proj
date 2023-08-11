import React from 'react';
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {SectionText} from "components/SectionText";
import {Skill} from "./skill/Skill";
import {Container} from "components/Container";
import {S} from "layout/sections/techstack/TechStackl_Styles"

const SkillData = [

    {
        iconId: "html",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "0 0 120 120"
    },

    {
        iconId: "css",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "0 0 120 120"
    },

    {
        iconId: "js",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "0 0 120 120"
    },

    {
        iconId: "ts",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-2.5 -2 36.7 36.7"
    },

    {
        iconId: "react",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-5 -10 120 120"
    },

    {
        iconId: "redux",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-10 -10 120 120"
    },

    {
        iconId: "bootstrap",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-15 -15 120 120"
    },

    {
        iconId: "tailwind",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "0 8 120 120"
    },

    {
        iconId: "sass",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-1 -15 120 120"
    },

    {
        iconId: "git",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-7 -7 120 120"
    },

    {
        iconId: "greensock",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "0 -3 120 120",
    },

    {
        iconId: "vscode",
        iconWidth: "80",
        iconHeight: "80",
        iconViewBox: "-5 -5 120 120"
    }
]

export const TechStack:React.FC = () => {
    return (
        <S.TechStack id={"techstack"}>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} gap={"20px"}>

                    {SkillData.map((s, index) => {
                        return <Skill iconId={s.iconId} key={index}
                                      iconWidth={s.iconWidth} iconHeight={s.iconHeight} iconViewBox={s.iconViewBox}/>
                    })}
                    
                </FlexWrapper>
            </Container>
        </S.TechStack>
    );
};



