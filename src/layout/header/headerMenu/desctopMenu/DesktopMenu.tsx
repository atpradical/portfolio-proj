import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from "layout/header/HeaderMenu_Styles"
import {MenuItemType} from "layout/header/Header";

type DesktopMenuPropsType = {
    menuItems: MenuItemType[]
}

export const DesktopMenu: React.FC<DesktopMenuPropsType> = (props: DesktopMenuPropsType) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};

