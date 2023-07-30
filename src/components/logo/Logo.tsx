import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
            <a href="">
                <Icon iconId={'logo'}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  flex-grow: 1;
`