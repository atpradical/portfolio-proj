import styled from "styled-components";
import {FlexWrapper} from "components/FlexWrapper";
import {theme} from "styles/Theme";

const Contacts = styled.section`

    ${FlexWrapper} > ${FlexWrapper} {
      max-width: 600px;
      width: 100%;
    }

  @media ${theme.media.desktopTiny} {
    
    & ${FlexWrapper}:nth-child(1) {
      flex-wrap: wrap;
    }
  }
`

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`

const Field = styled.input`
  width: 100%;
  height: 2em;
  padding: 7px 15px;
  background-color: #fff;
  border: 1px solid ${theme.colors.placeholderColor};
  border-radius: 10px;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);

  color: ${theme.colors.titleFont};
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible{
    outline: 1px solid ${theme.colors.lightFont};
  }
`

export const S = {
    Contacts,
    Form,
    Field
}