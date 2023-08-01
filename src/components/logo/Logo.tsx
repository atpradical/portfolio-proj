import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Logo = () => {
    return (
        <StyledLogo>
            <a href="">
                <Icon iconId={'logo'} iconWidth={'150px'} iconHeight={'55'} iconViewBox={'0 -25 350 160'}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  flex-grow: 5;
`