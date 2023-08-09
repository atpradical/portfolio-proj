import React from 'react';
import {FlexWrapper} from "components/FlexWrapper";
import {Text} from "components/Text";
import {S} from "./Slider_Styles";


export const Slider:React.FC = () => {
    return (
        <S.Slider>
            <FlexWrapper>
                <S.Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <S.Name>@ivan ivanow</S.Name>
                </S.Slide>
            </FlexWrapper>
            <S.Pagination>
                <span className={"active"}></span>
                <span></span>
                <span></span>
            </S.Pagination>
        </S.Slider>
    );
};
