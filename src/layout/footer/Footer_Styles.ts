import styled from "styled-components";
import {theme} from "styles/Theme";
import {Link} from "components/Link";

const Footer = styled.footer`
  padding-bottom: 40px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    display: inline-block;
    max-width: 1220px;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.lightFont};
    bottom: 55%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (max-width: 630px) {
    &::after {
      bottom: 35%;
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

  @media screen and (max-width: 630px) {
    flex-direction: column;
    gap: 20px;
  }
`

const Copyright = styled.small`
  display: block;
  font-size: 14px;

  & > span {
    background-image: ${theme.colors.gradient90};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const S = {
    Footer,
    FooterSection,
    Copyright
}