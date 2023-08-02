import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {SocialsIconList} from "components/socials/Socials";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";
import {Link} from "components/Link";
import {HeaderMenu} from "layout/header/headerMenu/HeaderMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <StyledFooterSection>
                        <Logo iconId={"logo"}/>
                        <Link href="mailto:ivan.dolgikh1199@gmail.com" title={"mail to Ivan"}>ivan.dolgikh1199@gmail.com</Link>
                        <SocialsIconList/>
                    </StyledFooterSection>
                    <StyledFooterSection>
                        <HeaderMenu menuItems={items}/>
                        <Copyright>© 2023 Designed and built
                            by <span>Ivan Dolgikh</span> with <span>Love</span> & <span>Coffee</span></Copyright>
                    </StyledFooterSection>
                </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
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
`

const StyledFooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
  
  & a {
    color: ${theme.colors.titleFont};
    font-size: 18px;
  }

  & ${Link} {
    margin-right: 10px;
    font-size: 18px;
    font-weight: 400;
  }
  
  &:nth-of-type(1) ${Link} {
    text-transform: lowercase;
  }
`

const Copyright = styled.small`
  font-size: 14px;

  & > span {
    background-image: ${theme.colors.gradient90};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
