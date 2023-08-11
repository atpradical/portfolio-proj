import styled from "styled-components";
import {theme} from "styles/Theme";
import {Link} from "components/Link";
import {font} from "styles/Common";

const Footer = styled.footer`
  position: relative;
  padding-bottom: 25px;
  background-color: ${theme.colors.primary};

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    max-width: 1220px;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lightFont};
    bottom: 60px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${theme.media.tablet} {
    &::after {
      width: 70%; 
    }
  }
`

const FooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;

  & a {
    color: ${theme.colors.titleFont};
    font-size: 18px;
  }

  & ${Link} {
    margin: 0;
    ${font({weight: 400, lineHeight: 1.2, Fmax: 18, Fmin: 14})};
    color: ${theme.colors.titleFont};
  }

  &:nth-of-type(1) ${Link} {
    text-transform: lowercase;
  }

  @media ${theme.media.tablet} {
    margin-bottom: 30px;
    flex-direction: column;
    gap: 20px;
  }
`

export const S = {
    Footer,
    FooterSection
}