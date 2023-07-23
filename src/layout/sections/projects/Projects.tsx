import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import projectImg1 from "../../../assets/img/prog-img/proj-1.webp";
import projectImg2 from "../../../assets/img/prog-img/proj-2.webp";
import projectImg3 from "../../../assets/img/prog-img/proj-3.webp";
import projectImg4 from "../../../assets/img/prog-img/proj-4.webp";
import projectImg5 from "../../../assets/img/prog-img/proj-5.webp";
import projectImg6 from "../../../assets/img/prog-img/proj-6.webp";

const projectItems = ["All", "LANDING PAGE", "REACT", "SPA"];

export const Projects = () => {
    return (
        <StyledProjects>
            <SectionTitle>Projects</SectionTitle>
            <Menu menuItems={projectItems}/>
            <FlexWrapper wrap={"wrap"} justify={"space-around"}>
                <Project title={"Project Tile goes here"}
                         src={projectImg1}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"Project Tile goes here"}
                         src={projectImg2}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"Project Tile goes here"}
                         src={projectImg3}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"Project Tile goes here"}
                         src={projectImg4}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"Project Tile goes here"}
                         src={projectImg5}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
                <Project title={"Project Tile goes here"}
                         src={projectImg6}
                         text={"This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content"}/>
            </FlexWrapper>
        </StyledProjects>
    );
};

const StyledProjects = styled.section`
  min-height: 50vh;
  background-color: #f3c8d7;

`