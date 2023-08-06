import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {SectionText} from "components/SectionText";
import {Button} from "components/Button";
import {Testimony} from "layout/sections/contatcs/testimony/Testimony";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {theme} from "styles/Theme";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Testimony/>
                    <FlexWrapper direction={"column"} grow={"1"} >
                        <SectionTitle>Contacts</SectionTitle>
                        <SectionText>I'm available for freelance</SectionText>
                        <StyledForm>
                            <Field placeholder={"name"}/>
                            <Field placeholder={"subject"}/>
                            <Field as={"textarea"} placeholder={"message"}/>
                            <Button type={"submit"}>Send</Button>
                        </StyledForm>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
  flex-grow: 1;
  
`

const StyledForm = styled.form`
  max-width: 540px;
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