import React from 'react';
import iconsSprite from '../../assets/img/icon-sprite.svg';

type IconPropsType = {
    iconId?: string
    iconWidth?: string
    iconHeight?: string
    iconViewBox?: string
}

export const Icon = (props: IconPropsType) => {
    return (
        <svg width={props.iconWidth || "50"} height={props.iconHeight || "50"}
             viewBox={props.iconViewBox || "0 0 50 50"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${props.iconId}`}/>
        </svg>
    );
};
