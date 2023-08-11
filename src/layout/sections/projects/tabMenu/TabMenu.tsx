import React from 'react';
import {S} from "./TabMenu_Styles"
import {SL} from "components/Link"

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
                            <SL.Link active={props.currentFilterStatus === item.status} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</SL.Link>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.TabMenu>
    );
};

