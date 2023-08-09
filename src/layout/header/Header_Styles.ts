import styled from "styled-components";
import {theme} from "styles/Theme";
import {SS} from "components/socials/Socials_Styles"

const Header = styled.header`
  background-color: ${theme.colors.primary};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  
  & ${SS.SocialsList} {
    
    @media ${theme.media.desktopTiny} {
      margin-right: 70px;
    }
    
    @media screen and (max-width: 380px) {
        display: none;
    }
  }
`

export const S = {
    Header
}