import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";

type LogoPropsType = {
    iconId?: string
}

export const Logo: React.FC<LogoPropsType> = (props: LogoPropsType) => {
    return (
        <StyledLogo onClick={() => {scroll.scrollToTop()}}>
            <Icon iconId={props.iconId} iconWidth={'150px'} iconHeight={'55'} iconViewBox={'50 -25 320 140'}/>
        </StyledLogo>
    );
};

const StyledLogo = styled.div`
  flex-grow: 5;
  
  &:hover {
    cursor: pointer;
  }
`