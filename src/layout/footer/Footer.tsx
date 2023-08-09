import React from 'react';
import {Logo} from "components/logo/Logo";
import {SocialsIconList} from "components/socials/Socials";
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {Link} from "components/Link";
import {DesktopMenu} from "layout/header/headerMenu/desctopMenu/DesktopMenu";
import {S} from "./Footer_Styles"

const items = ["Home", "About", "Tech Stack", "Projects", "Contact"];

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
                    <S.FooterSection>
                        <DesktopMenu menuItems={items}/>
                        <S.Copyright>© 2023 Designed and built
                            by <span>Ivan Dolgikh</span> with <span>Love</span> & <span>Coffee</span></S.Copyright>
                    </S.FooterSection>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};
