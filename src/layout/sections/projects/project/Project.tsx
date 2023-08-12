import React from 'react';
import {Button} from "components/Button";
import {S} from "layout/sections/projects/Projects_Styles";
import {SP} from "./ProjectLink";

type ProjectPropsType = {
    src: string;
    title: string;
    text: string;
    hrefProj?: string;
    hrefGit?: string;
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </S.ImageWrapper>
            <S.CardDescription>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <S.LinksBlock>
                    <SP.ProjectLink href={props.hrefProj}>Live Preview</SP.ProjectLink>
                    <SP.ProjectLink href={props.hrefGit}>View Code</SP.ProjectLink>
                </S.LinksBlock>
            </S.CardDescription>
        </S.Project>
    );
};