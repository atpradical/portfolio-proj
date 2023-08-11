import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "components/icon/Icon";
import {theme} from "styles/Theme";
import {animateScroll as scroll} from "react-scroll/modules";

export const GoTopBtn = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
    }, [])

    return (
        <>
            {showBtn && (
                <StyledGoTopBtn onClick={() => {
                    scroll.scrollToTop()
                }}>
                    <Icon iconId={"arrowToTop"} iconWidth={"30"} iconHeight={"30"} iconViewBox={"0 0 30 30"}/>
                </StyledGoTopBtn>)}

        </>
    );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  right: 2%;
  bottom: 2%;
  width: 30px;
  height: 30px;
  padding: 6px;
  border: 2px solid ${theme.colors.titleFont};
  border-radius: 5px;
  background-color: ${theme.colors.primary};
  opacity: .3;
  z-index: 99999;

  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`