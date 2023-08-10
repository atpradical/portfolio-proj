import React from 'react';
import {S} from "./TabMenu_Styles"
import {Link} from "components/Link";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{ status: TabsStatusType, title: string }>
    changeFilterStatus: (value: TabsStatusType) => void
    currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((item, index) => {
                    return (
                        <S.ListItem key={index}>
                            <Link active={props.currentFilterStatus === item.status} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.TabMenu>
    );
};

