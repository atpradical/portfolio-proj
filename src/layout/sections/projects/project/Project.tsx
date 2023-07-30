import React from 'react';
import styled from "styled-components";

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
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px;
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;

`

const Title = styled.h3`
  padding: 0 30px;
`

const Text = styled.p`
  padding: 0 30px;
`

const Link = styled.a`
  padding: 0 30px;
`
