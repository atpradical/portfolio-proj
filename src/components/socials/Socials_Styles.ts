import styled from "styled-components";

const SocialsList = styled.ul`
  margin: 0 20px;
  display: flex;
  gap: 10px;
`

const SocialsItem = styled.li``

const SocialsLink = styled.div`
  
  &:hover {
    cursor: pointer;
  }
`

export const SS = {
    SocialsList,
    SocialsItem,
    SocialsLink
}