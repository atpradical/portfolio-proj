import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {SocialsIconList} from "../../components/socials/Socials";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={"column"} justify={"center"}>
                <StyledFooterSection>
                    <Logo/>
                    <ul>
                        <li><a href="#">+79258045471</a></li>
                    </ul>
                    <ul>
                        <li><a href="#">ivan.dolgikh1199@gmail.com</a></li>
                    </ul>
                    <SocialsIconList/>
                </StyledFooterSection>
                <StyledFooterSection>
                    <Menu menuItems={items}/>
                    <Copyright>© 2023 Designed and built by Ivan Dolgikh with Love & Coffee</Copyright>
                </StyledFooterSection>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  background-color: #beb7b7;
  min-height: 20vh;
`
const StyledFooterSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Copyright = styled.small`

`
