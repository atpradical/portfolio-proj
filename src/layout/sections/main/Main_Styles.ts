import styled from "styled-components";
import {theme} from "styles/Theme";
import {font} from "styles/Common";

const Main = styled.section`
  min-height: 100vh;
  display: flex;
  padding: 150px 0 100px;
`

const MainTitle = styled.h1`
  ${font({family: "Poppins", weight: 700, Fmax: 54, Fmin: 30})}
  color: ${theme.colors.titleFont};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -1px;
  
  p {
    display: none;
  }

  @media ${theme.media.mobile} {
    white-space: nowrap;
  }
`

const TitleText = styled.h2`
  ${font({family: "Poppins", weight: 700, Fmax: 54, Fmin: 30})}
  color: ${theme.colors.titleFont};
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -1px;

  @media ${theme.media.mobile} {
    white-space: nowrap;
  }
`

const Name = styled.h2`
  ${font({family: "Poppins", weight: 700, Fmax: 56, Fmin: 32})}
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -1px;

  background-image: ${theme.colors.gradient90};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media ${theme.media.mobile} {
    white-space: nowrap;
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    width: 370px;
    height: 370px;
    border-radius: 50%;
    background-image: ${theme.colors.gradient0};

    position: absolute;
    z-index: -1;
    left: -10px;
    top: -10px;

    @media ${theme.media.mobile} {
      width: 300px;
      height: 300px;
    }
  }

  @media ${theme.media.tablet} {
    flex-wrap: wrap;
    margin: 50px 0;
  }
`

const Photo = styled.img`
  width: 350px;
  height: 350px;
  object-fit: cover;
  border-radius: 50%;
  background-position: center;
  filter: grayscale(90%);

  @media ${theme.media.mobile} {
    width: 280px;
    height: 280px;
  }
`

export const S = {
    Main,
    MainTitle,
    TitleText,
    Name,
    PhotoWrapper,
    Photo,
}