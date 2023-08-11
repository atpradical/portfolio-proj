import React, {useState} from 'react';
import {Menu} from "layout/header/headerMenu/menu/Menu";
import {S} from "layout/header/HeaderMenu_Styles"
import {MenuItemType} from "layout/header/Header";

type DMobileMenuPropsType = {
    menuItems: MenuItemType[]
}

export const MobileMenu: React.FC<DMobileMenuPropsType> = (props: DMobileMenuPropsType) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MobileMenu>
            <S.BurgerBtn isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
                <span></span>
            </S.BurgerBtn>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)}}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

