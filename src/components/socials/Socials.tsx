import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "styles/Theme";

export const SocialsIconList = () => {
    return (
        <StyledSocialsList>
            <SocialsItem>
                <SocialsLink>
                    <Icon iconId={"github"}
                          iconWidth={"30px"} iconHeight={"30px"} iconViewBox={"0 0 30px 30px"}
                          href={"https://github.com/atpradical"} title={"go to github account"}/>
                </SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink>
                    <Icon iconId={"telegram"}
                          iconWidth={"32px"} iconHeight={"32px"} iconViewBox={"0 0 32px 32px"}
                          href={"https://t.me/Ivan_Dolgikh"} title={"go to telegram account"}/>
                </SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink>
                    <Icon iconId={"linkedin"}
                          iconWidth={"33px"} iconHeight={"33px"} iconViewBox={"0 0 30 30 "}
                          href={"https://www.linkedin.com/"} title={"go to linkedIn account"}/>
                </SocialsLink>
            </SocialsItem>
        </StyledSocialsList>
    );
};

export const StyledSocialsList = styled.ul`
  margin: 0 20px;
  display: flex;
  gap: 10px;
`

const SocialsItem = styled.li`
`

const SocialsLink = styled.div`
  &:hover {
    cursor: pointer;
  }
`