import React from 'react';
import {Logo} from "components/logo/Logo";
import {SocialsIconList} from "components/socials/Socials";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {Link} from "components/Link";
import {S} from "./Footer_Styles"
import {Copyright} from "components/copyright/Copyright";


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} justify={"center"}>
                    <S.FooterSection>
                        <Logo iconId={"logo"}/>
                        <Link href="mailto:ivan.dolgikh1199@gmail.com"
                              title={"mail to Ivan"}>ivan.dolgikh1199@gmail.com</Link>
                        <SocialsIconList/>
                    </S.FooterSection>
                    <Copyright/>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
