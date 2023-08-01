import React from 'react';
import styled from "styled-components";
import {CardText} from "../company/Company";
import location from "assets/img/prog-img/location.svg";

type LocationPropsType = {
    companyLocation?: string;
}

export const Location = (props: LocationPropsType) => {
    return (
        // <StyledLocation isEmpty={!props.companyLocation}>
        <StyledLocation>
            <CardText>{props.companyLocation}</CardText>
        </StyledLocation>
    );
};

// const StyledLocation = styled.span<{isEmpty: boolean}>`
const StyledLocation = styled.span`
  
  position: relative;
//"{display: {(props) => props.isEmpty && 'none'};"

  &::after {
    content: "";
    display: inline-block;
    width: 16px;
    height: 16px;
    position: absolute;
    background-image: url(${location});
    background-repeat: no-repeat;
    bottom: 1px;
    left: -20px;
  }
  
`

