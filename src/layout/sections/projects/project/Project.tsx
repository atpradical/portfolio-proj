import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    src: string;
    title: string;
    text: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
            <StyledProject>
                <Image src={props.src} alt=""/>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>Live Preview</Link>
                <Link href={"#"}>View Code</Link>
            </StyledProject>
    );
};

const StyledProject = styled.div`
  background-color: #f6e1ca;
  max-width: 375px;
  widht:  100%;
  margin: 2%;
`

const Image = styled.img`
  widht:  100%;
  height: 260px;
  object-fit: cover;
`

const Title = styled.h3`

`

const Text = styled.p`

`

const Link = styled.a`

`
