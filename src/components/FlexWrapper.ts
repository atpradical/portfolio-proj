import styled from "styled-components";

type FlexWrapperType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    grow?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
  align-items: ${props => props.align || "strech"};
  flex-wrap: ${props => props.wrap || "nowrap"};
  flex-grow: ${props => props.grow || "0"};
  gap: ${props => props.gap};
  height: 100%;
`