import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {SectionTitle} from "components/SectionTitle";
import {SectionText} from "components/SectionText";
import {Skill} from "./skill/Skill";
import {Container} from "components/Container";


export const TechStack = () => {
    return (
        <StyledTechStack>
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <SectionText>Technologies I’ve been working with recently</SectionText>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"html"}
                           title={"HTML5"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"0 0 120 120"}/>
                    <Skill iconId={"css"}
                           title={"CSS3"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"0 0 120 120"}/>
                    <Skill iconId={"js"}
                           title={"JavaScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"0 0 120 120"}/>
                    <Skill iconId={"ts"}
                           title={"TypeScript"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-2.5 -2 36.7 36.7"}/>
                    <Skill iconId={"react"}
                           title={"React"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-5 -10 120 120"}/>
                    <Skill iconId={"redux"}
                           title={"Redux"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-10 -10 120 120"}/>
                    <Skill iconId={"bootstrap"}
                           title={"Bootstrap"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-15 -15 120 120"}/>
                    <Skill iconId={"tailwind"}
                           title={"Tailwind"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"0 8 120 120"}/>
                    <Skill iconId={"sass"}
                           title={"SASS"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-1 -15 120 120"}/>
                    <Skill iconId={"git"}
                           title={"Git"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-7 -7 120 120"}/>
                    <Skill iconId={"greensock"}
                           title={"Greensock"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"90"} iconViewBox={"0 -3 120 120"}/>
                    <Skill iconId={"vscode"}
                           title={"VSCode"}
                           description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim"}
                           iconWidth={"80"} iconHeight={"80"} iconViewBox={"-5 -5 120 120"}/>
                </FlexWrapper>
            </Container>
        </StyledTechStack>
    );
};

const StyledTechStack = styled.section`
  min-height: 50vh;
  margin: 50px 0;
`

