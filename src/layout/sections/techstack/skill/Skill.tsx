import React from 'react';
import {Icon} from "components/icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";

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
  width: 15%;
  margin-bottom: 25px;
`