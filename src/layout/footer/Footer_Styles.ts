import styled from "styled-components";
import {theme} from "styles/Theme";
import {Link} from "components/Link";

const Footer = styled.footer`
  padding-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    max-width: 1220px;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lightFont};
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media ${theme.media.tablet} {
    &::after {
      width: 70%;
      bottom: 20%;
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
    font-size: 18px;
    font-weight: 400;
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