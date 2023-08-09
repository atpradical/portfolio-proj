import React from 'react';
import {Icon} from "../icon/Icon";
import {SS} from "./Socials_Styles"

const socialsLinkData = [
    {
        iconId: "github",
        iconWidth: "30px",
        iconHeight: "30px",
        iconViewBox: "0 0 30 30",
        href: "https://github.com/atpradical",
        title: "go to github account",
    },

    {
        iconId: "telegram",
        iconWidth: "32px",
        iconHeight: "32px",
        iconViewBox: "0 0 32 32",
        href: "https://t.me/Ivan_Dolgikh",
        title: "go to telegram account",
    },

    {
        iconId: "linkedin",
        iconWidth: "33px",
        iconHeight: "33px",
        iconViewBox: "0 0 30 30",
        href: "https://www.linkedin.com/",
        title: "go to linkedIn account",
    },
]

export const SocialsIconList: React.FC = () => {
    return (
        <SS.SocialsList>
            {socialsLinkData.map((s, index) => {
                return (
                    <SS.SocialsItem key={index}>
                        <SS.SocialsLink>
                            <Icon iconId={s.iconId}
                                  iconWidth={s.iconWidth} iconHeight={s.iconHeight} iconViewBox={s.iconViewBox}
                                  href={s.iconViewBox} title={s.title}/>
                        </SS.SocialsLink>
                    </SS.SocialsItem>
                )
            })}
        </SS.SocialsList>
    );
};