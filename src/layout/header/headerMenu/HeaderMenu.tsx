import React from 'react';
import styled from "styled-components";
import {Link} from "components/Link";

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

export const ListItem = styled.li`

  ${Link} {
    margin-right: 50px;
    text-align: center;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`

const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: center;
  }
`