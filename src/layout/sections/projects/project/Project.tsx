import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";
import linkChain from "../../../../assets/img/prog-img/proj-link-chain.svg";
import gitHub from "../../../../assets/img/prog-img/proj-github.svg";
import {Link} from "components/Link";
import {Button} from "components/Button";

type ProjectPropsType = {
    src: string;
    title: string;
    text: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject>
            <ImageWrapper>
                <Image src={props.src} alt=""/>
                <Button>View Project</Button>
            </ImageWrapper>
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href={"#"}>Live Preview</Link>
                <Link href={"#"}>View Code</Link>
            </Description>
        </StyledProject>
    );
};

const StyledProject = styled.div`
  max-width: 375px;
  width: 100%;
  margin-top: 50px;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);

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

  ${Link}:nth-of-type(1)::after {
    left: 30px;
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

  ${Link}:nth-of-type(2)::after {
    left: 30px;
  }
`
const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 20px 20px 0 0;
      background: rgba(0, 0, 0, .3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    opacity: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    padding: 10px;
    border: none;
    background-color: transparent;
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
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