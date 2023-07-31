import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Menu} from "components/menu/Menu";
import {SocialsIconList} from "components/socials/Socials";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";
import {Link} from "components/Link";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <StyledFooterSection>
                        <Logo/>
                        <Link href="tel:+79999999999">+7-999-999-99-99</Link>
                        <Link href="mailto:ivan.dolgikh1199@gmail.com">ivan.dolgikh1199@gmail.com</Link>
                        <SocialsIconList/>
                    </StyledFooterSection>
                    <StyledFooterSection>
                        <Menu menuItems={items}/>
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
    width: 80%;
    height: 1px;
    background-color: ${theme.colors.normalFont};
    bottom: 55%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const StyledFooterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  
  & a {
    color: ${theme.colors.titleFont};
    font-size: 18px;
  }

  & ${Link} {
    display: inline-block;
    flex-grow: 0.5;
    color: ${theme.colors.titleFont};
    font-family: DM Sans, sans-serif;
    font-size: 16px;
    font-weight: 400;
    text-transform: lowercase;

    &::after {
      right: 60px;
    }
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
