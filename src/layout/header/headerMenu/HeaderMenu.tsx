import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="#">{item}</Link>
                        </ListItem>
                    )
                })}
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const ListItem = styled.li`

`

const Link = styled.a`
  color: ${theme.colors.normalFont};
  font-family: DM Sans;
  font-size: 20px;
  font-weight: 500;
  line-height: 26px;
`