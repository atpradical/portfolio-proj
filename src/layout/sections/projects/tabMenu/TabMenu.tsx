import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";
import {Link} from "components/Link";

export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
  }
`
const ListItem = styled.li``

