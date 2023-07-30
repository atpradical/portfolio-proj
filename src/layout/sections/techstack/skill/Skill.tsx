import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {theme} from "styles/Theme";

type SkillPropsType = {
    iconId: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
    title: string
    description: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                <Icon iconId={props.iconId} iconWidth={props.iconWidth} iconHeight={props.iconHeight}
                      iconViewBox={props.iconViewBox}/>
                <StyledSkillTitle>{props.title}</StyledSkillTitle>
                <StyledSkillText>{props.description}</StyledSkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 15%;
  margin-bottom: 25px;
`

const StyledSkillTitle = styled.h3`
  margin: 10px 0;
  color: ${theme.colors.cardTitleFont};
  text-align: center;
  font-size: 20px;
  font-weight: 500;
`

const StyledSkillText = styled.p`
  color: ${theme.colors.lightFont};
  text-align: start;
  font-size: 15px;
  font-weight: 300;
`