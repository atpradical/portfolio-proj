//rsc(enter)
import React from 'react';
import styled from "styled-components";
import {Logo} from "components/logo/Logo";
import {Menu} from "components/menu/Menu";
import {SocialsIconList} from "components/socials/Socials";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo/>
                    <Menu menuItems={items}/>
                    <SocialsIconList/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #c6f5b0;
`