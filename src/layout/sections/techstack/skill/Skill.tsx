import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string;
    title: string;
    description: string;

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <StyledSkillTitle>{props.title}</StyledSkillTitle>
            <StyledSkillText>{props.description}</StyledSkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    width: 16.6%;
`

const StyledSkillTitle = styled.h3`
    
`

const StyledSkillText = styled.p`
    
`