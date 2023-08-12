import React, {useState} from 'react';
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
import {TabMenu, TabsStatusType} from "layout/sections/projects/tabMenu/TabMenu";
import {S} from "layout/sections/projects/Projects_Styles"
import {AnimatePresence, motion} from "framer-motion";

const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
    {
        title: "all",
        status: "all"
    },
    {
        title: "landing page",
        status: "landing"
    },
    {
        title: "react",
        status: "react"
    },
    {
        title: "spa",
        status: "spa"
    },
]


const projectData = [
    {
        id: 1,
        title: "Project Tile goes here",
        src: projectImg1,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "spa",
        hrefProj: "",
        hrefGit: ""
    },

    {
        id: 2,
        title: "Project Tile goes here",
        src: projectImg2,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "react",
        hrefProj: "",
        hrefGit: ""
    },

    {
        id: 3,
        title: "Project Tile goes here",
        src: projectImg3,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "landing",
        hrefProj: "",
        hrefGit: ""
    },

    {
        id: 4,
        title: "Project Tile goes here",
        src: projectImg4,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "spa",
        hrefProj: "",
        hrefGit: ""
    },

    {
        id: 5,
        title: "Project Tile goes here",
        src: projectImg5,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "react",
        hrefProj: "",
        hrefGit: ""
    },

    {
        id: 6,
        title: "Project Tile goes here",
        src: projectImg6,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        type: "landing",
        hrefProj: "",
        hrefGit: ""
    }
]

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredProjects = projectData

    if (currentFilterStatus === "landing") {
        filteredProjects = projectData.filter(project => project.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredProjects = projectData.filter(project => project.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredProjects = projectData.filter(project => project.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Projects id={"projects"}>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <SectionText>Things I’ve built so far</SectionText>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}/>
                <FlexWrapper wrap={"wrap"} justify={"space-around"} align={"flex-start"} gap={"45px"}>
                    <AnimatePresence>
                        {filteredProjects.map((p) => {
                            return (
                                <motion.div layout={true}
                                            initial={{opacity: 0}}
                                            animate={{opacity: 1}}
                                            exit={{opacity: 0}}
                                            key={p.id}>

                                    <Project key={p.id} title={p.title} src={p.src} text={p.text} hrefProj={p.hrefProj}
                                             hrefGit={p.hrefGit}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};