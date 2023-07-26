import React from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";

export const SocialsIconList = () => {
    return (
        <StyledSocialsList>
            <SocialsItem>
                <SocialsLink>
                    <Icon iconId={"github"}
                          iconWidth={"30px"} iconHeight={"30px"} iconViewBox={"0 0 30px 30px"}/>
                </SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink>
                    <Icon iconId={"twitter"}
                          iconWidth={"31px"} iconHeight={"31px"} iconViewBox={"0 0 31px 31px"}/>
                </SocialsLink>
            </SocialsItem>
            <SocialsItem>
                <SocialsLink>
                    <Icon iconId={"linkedin"}
                          iconWidth={"31px"} iconHeight={"31px"} iconViewBox={"0 0 31px 31px"}/>
                </SocialsLink>
            </SocialsItem>
        </StyledSocialsList>
    );
};

const StyledSocialsList = styled.ul`
  display: flex;
  gap: 35px;
`

const SocialsItem = styled.li`

`

const SocialsLink = styled.a`

`