import React from 'react';
import {S} from "./TabMenu_Styles"
import {Link} from "components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <S.TabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <Link href="">{item}</Link>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.TabMenu>
    );
};

