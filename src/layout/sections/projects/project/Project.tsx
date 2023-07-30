import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";
import linkChain from "../../../../assets/img/prog-img/proj-link-chain.svg";
import gitHub from "../../../../assets/img/prog-img/proj-github.svg";

type ProjectPropsType = {
    src: string;
    title: string;
    text: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
            <StyledProject>
                <Image src={props.src} alt=""/>
                <Description>
                    <Title>{props.title}</Title>
                    <Text>{props.text}</Text>
                    <Link href={"#"}>Live Preview</Link>
                    <Link href={"#"}>View Code</Link>
                </Description>
            </StyledProject>
    );
};

const Link = styled.a`
  color: ${theme.colors.cardTitleFont};
  font-size: 16px;
  font-weight: 400;
  text-decoration-line: underline;
  margin-left: 10px;
  margin-bottom: 25px;
`

const StyledProject = styled.div`
  max-width: 375px;
  width: 100%;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.20);
  
  ${Link} ~ ${Link} {
    margin-left: 60px;
  }

  ${Link}:nth-of-type(1)::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${linkChain});
    position: relative;
    left: -10px;
    top: 4px;
  }

  ${Link}:nth-of-type(2)::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${gitHub});
    position: relative;
    left: -10px;
    top: 4px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0px 0px;
`

const Description = styled.div`
  padding: 0 30px 25px;
    
`

const Title = styled.h3`
  margin-top: 12px; 
  color: ${theme.colors.cardTitleFont};
  text-align: center;
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
`

const Text = styled.p`
  margin: 17px 0 12px;
   color: ${theme.colors.normalFont};
`