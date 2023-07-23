import React from 'react';
import styled from "styled-components";

export const Socials = () => {
    return (
            <StyledSocials>
                <li><a href="">GitHub</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">LinkedIn</a></li>
            </StyledSocials>
    );
};

const StyledSocials = styled.ul`
      display: flex;
      gap: 30px;
`