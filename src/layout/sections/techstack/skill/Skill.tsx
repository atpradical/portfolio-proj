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
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                <Icon iconId={props.iconId} iconWidth={props.iconWidth} iconHeight={props.iconHeight}
                      iconViewBox={props.iconViewBox}/>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  width: 150px;
  flex-grow: 1;
  margin-bottom: 25px;
  
`