import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "components/SectionTitle";
import {SectionText} from "components/SectionText";
import {Button} from "components/Button";
import {Testimony} from "layout/sections/contatcs/testimony/Testimony";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <Testimony/>
                    <FlexWrapper direction={"column"} grow={"1"} gap={"20px"}>
                        <SectionTitle>Contacts</SectionTitle>
                        <SectionText>I'm available for freelance</SectionText>
                        <StyledForm>
                            <Field placeholder={"Name"}/>
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
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 0 auto;
`

const Field = styled.input`

`