import React from 'react';
import {Button} from "components/Button";
import {S} from "layout/sections/projects/Projects_Styles"
import {SL} from "components/Link"

type ProjectPropsType = {
    src: string;
    title: string;
    text: string;
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
                    <SL.Link href={"#"}>Live Preview</SL.Link>
                    <SL.Link href={"#"}>View Code</SL.Link>
                </S.LinksBlock>
            </S.CardDescription>
        </S.Project>
    );
};