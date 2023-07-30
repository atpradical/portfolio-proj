//rsc(enter)
import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {SocialsIconList} from "components/socials/Socials";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";
import {theme} from "styles/Theme";
import {HeaderMenu} from "layout/header/headerMenu/HeaderMenu";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                    <SocialsIconList/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: ${theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`