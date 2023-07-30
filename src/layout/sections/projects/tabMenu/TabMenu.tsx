import React from 'react';
import styled from "styled-components";
import {theme} from "styles/Theme";

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
    margin-bottom: 10px;
  }
`
const ListItem = styled.li`
  position: relative;
`

const Link = styled.a`
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  text-transform: capitalize;
  padding: 10px;
  
  &:hover {
    &::after {
      height: 3px;
    }
  }

  &::after {
    content: "";
    display: inline-block;
    background-color: ${theme.colors.titleFont};

    position: absolute;
    bottom: 0;
    left: -5px;
    right: -5px;
  }
`

