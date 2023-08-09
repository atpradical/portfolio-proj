import React from 'react';
import iconsSprite from '../../assets/img/icon-sprite.svg';
import {S} from "./Icon_Styles";

type IconPropsType = {
    iconId?: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
    href?: string
    title?: string
}

export const Icon:React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <S.Icon href={props.href} title={props.title} target={"_blank"}>
            <svg width={props.iconWidth || "50"} height={props.iconHeight || "50"}
                 viewBox={props.iconViewBox || "0 0 50 50"} xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
            </svg>
        </S.Icon>
    );
};