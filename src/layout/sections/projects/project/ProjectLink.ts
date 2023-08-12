import styled from "styled-components";
import {font} from "styles/Common";
import {theme} from "styles/Theme";
import linkChain from "assets/img/prog-img/proj-link-chain.svg";
import gitHub from "assets/img/prog-img/proj-github.svg";

const ProjectLink = styled.a`
  display: inline-block;
  padding: 10px;
  position: relative;
  ${font({family: "DM Sans, sans-serif", weight: 500, lineHeight: 1.2, Fmax: 15, Fmin: 12})};
  font-style: normal;
  text-transform: capitalize;
  transition: ${theme.animation.transition2};
  margin-right: 15px;

  &:nth-of-type(1)::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${linkChain});
    position: relative;
    left: -10px;
    top: 4px;
  }

  &:nth-of-type(2)::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url(${gitHub});
    position: relative;
    left: -10px;
    top: 4px;
  }

  &:hover {
    text-shadow: 0 -5px 10px #13B0F5, 0 5px 10px #E70FAA;
    color: ${theme.colors.titleFont};
    font-weight: 700;
  }
`

export const SP = {
    ProjectLink
}