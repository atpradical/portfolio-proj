import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

type LogoPropsType = {
    iconId?: string
}

export const Logo = (props:LogoPropsType) => {
    return (
        <StyledLogo>
            <a href="">
                <Icon iconId={props.iconId} iconWidth={'150px'} iconHeight={'55'} iconViewBox={'50 -25 320 140'}/>
            </a>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  flex-grow: 5;
`