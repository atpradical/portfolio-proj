import React from 'react';
import {Link} from "components/Link";
import styled from "styled-components";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <ul>
            {props.menuItems.map((item, index) => {
                return (
                    <ListItem key={index}>
                        <Link href="#">{item}</Link>
                    </ListItem>
                )
            })}
        </ul>
    );
};

export const ListItem = styled.li`

  ${Link} {
    text-align: center;
    font-family: DM Sans, sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 26px;
  }
`