import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import {SectionText} from "components/SectionText";
import {Button} from "components/Button";
import {Testimony} from "layout/sections/contatcs/testimony/Testimony";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "./Contacts_Styles"


export const Contacts: React.FC = () => {
    return (
        <S.Contacts id={"contacts"}>
            <Container>
                <FlexWrapper justify={"space-around"} gap={"100px"}>
                    <Testimony/>
                    <FlexWrapper direction={"column"} id={"contactsBlock"}>
                        <SectionTitle>Contacts</SectionTitle>
                        <SectionText>I'm available for freelance</SectionText>
                        <S.Form>
                            <S.Field placeholder={"name"}/>
                            <S.Field placeholder={"subject"}/>
                            <S.Field as={"textarea"} placeholder={"message"}/>
                            <Button type={"submit"}>Send</Button>
                        </S.Form>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};