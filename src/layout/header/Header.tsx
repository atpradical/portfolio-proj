//rsc(enter)
import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Menu} from "../../components/menu/Menu";
import {Socials} from "../../components/socials/Socials";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu/>
            <Socials/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  background-color: #c6f5b0;
  display: flex;
  justify-content: space-between;
`