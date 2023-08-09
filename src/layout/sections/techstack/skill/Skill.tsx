import React from 'react';
import {Icon} from "components/icon/Icon";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from "layout/sections/techstack/TechStackl_Styles"

type SkillPropsType = {
    iconId: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <FlexWrapper direction={"column"} align={"center"} justify={"center"}>
                <Icon iconId={props.iconId} iconWidth={props.iconWidth} iconHeight={props.iconHeight}
                      iconViewBox={props.iconViewBox}/>
            </FlexWrapper>
        </S.Skill>
    );
};