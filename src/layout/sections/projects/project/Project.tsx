import React from 'react';
import {Link} from "components/Link";
import {Button} from "components/Button";
import {S} from "layout/sections/projects/Projects_Styles"

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
                    <Link href={"#"}>Live Preview</Link>
                    <Link href={"#"}>View Code</Link>
                </S.LinksBlock>
            </S.CardDescription>
        </S.Project>
    );
};