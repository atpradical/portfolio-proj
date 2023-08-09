import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {FlexWrapper} from "components/FlexWrapper";
import {Project} from "./project/Project";
import projectImg1 from "../../../assets/img/prog-img/proj-1.webp";
import projectImg2 from "../../../assets/img/prog-img/proj-2.webp";
import projectImg3 from "../../../assets/img/prog-img/proj-3.webp";
import projectImg4 from "../../../assets/img/prog-img/proj-4.webp";
import projectImg5 from "../../../assets/img/prog-img/proj-5.webp";
import projectImg6 from "../../../assets/img/prog-img/proj-6.webp";
import {Container} from "components/Container";
import {SectionText} from "components/SectionText";
import {TabMenu} from "layout/sections/projects/tabMenu/TabMenu";
import {S} from "layout/sections/projects/Projects_Styles"

const projectItems = ["all", "landing page", "react", "spa"];

const projectData = [
    {
        title: "Project Tile goes here",
        src: projectImg1,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    },

    {
        title: "Project Tile goes here",
        src: projectImg2,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    },

    {
        title: "Project Tile goes here",
        src: projectImg3,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    },

    {
        title: "Project Tile goes here",
        src: projectImg4,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    },

    {
        title: "Project Tile goes here",
        src: projectImg5,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    },

    {
        title: "Project Tile goes here",
        src: projectImg6,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
    }
]

export const Projects:React.FC = () => {
    return (
        <S.Projects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu menuItems={projectItems}/>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"flex-start"} gap={"45px"}>

                    {projectData.map((p, index) => {
                        return <Project key={index} title={p.title} src={p.src} text={p.text}/>
                    })}

                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};