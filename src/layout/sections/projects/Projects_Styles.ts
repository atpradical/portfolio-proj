import styled from "styled-components";
import {theme} from "styles/Theme";
import {FlexWrapper} from "components/FlexWrapper";
import {Button} from "components/Button";
import {font} from "styles/Common";

const Projects = styled.section`
  position: relative;

  @media ${theme.media.tablet} {
    & ${FlexWrapper} {
      padding: 0 100px;
      padding: 0;
    }
  }
`

const Project = styled.div`
  max-width: 355px;
  width: 100%;
  border-radius: 20px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);

  @media screen and (max-width: 1200px) {
    flex-grow: 1;
  }
`

const ImageWrapper = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 20px 20px 0 0;
    background: rgba(0, 0, 0, .3);
    backdrop-filter: blur(5px);
    opacity: 0;
    transition: ${theme.animation.transition2};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    width: auto;
    height: auto;
    padding: 10px;
    color: ${theme.colors.primary};
    border: none;
    background-color: transparent;
    opacity: 0;
    transition: ${theme.animation.transition2};
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  padding: 0 30px 25px;
`

const LinksBlock = styled.div`
     flex-direction: row;
`

const Title = styled.h3`
  margin-top: 10px;
  ${font({lineHeight: 1.2, weight: 500, Fmax: 28, Fmin: 22})}
  color: ${theme.colors.cardTitleFont};
  font-style: normal;
  text-align: center;
`

const Text = styled.p`
  ${font({lineHeight: 1.2, weight: 300, Fmax: 18, Fmin: 14})}
  font-style: normal;
  color: ${theme.colors.normalFont};
`

export const S = {
    Projects,
    Project,
    ImageWrapper,
    Image,
    CardDescription,
    LinksBlock,
    Title,
    Text
}