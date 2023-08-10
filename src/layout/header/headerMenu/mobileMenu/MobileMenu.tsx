import React from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from "layout/header/HeaderMenu_Styles"

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerBtn isOpen={true}>
                <span></span>
            </S.BurgerBtn>
            <S.MobileMenuPopup isOpen={true}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

