import React from 'react';
import {MenuLink} from "layout/header/headerMenu/menu/MenuLink";
import styled from "styled-components";
import {MenuItemType} from "layout/header/Header";

type DesktopMenuPropsType = {
    menuItems: MenuItemType[]
}

export const Menu: React.FC<DesktopMenuPropsType> = (props: DesktopMenuPropsType) => {
    return (
        <ul>
            {props.menuItems.map((i, index) => {
                return (
                    <ListItem key={index}>
                        <MenuLink activeClass="active" offset={-25} smooth={true} to={i.href}>{i.title}</MenuLink>
                    </ListItem>
                )
            })}
        </ul>
    );
};

export const ListItem = styled.li``