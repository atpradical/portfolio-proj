import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import {Icon} from "components/icon/Icon";
import {Slider} from "components/slider/Slider";
import {FlexWrapper} from "components/FlexWrapper";
import {S} from "./Testimony_Styles"

export const Testimony: React.FC = () => {
    return (
        <S.Testimony>
            <SectionTitle>Testimony</SectionTitle>
            <FlexWrapper direction={"column"} align={"center"}>
                <Icon iconId={"quotes"}/>
                <Slider/>
            </FlexWrapper>
        </S.Testimony>
    );
};
