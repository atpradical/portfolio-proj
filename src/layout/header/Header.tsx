//rsc(enter)
import React from 'react';
import {Logo} from "components/logo/Logo";
import {Container} from "components/Container";
import {FlexWrapper} from "components/FlexWrapper";
import {DesktopMenu} from "layout/header/headerMenu/desctopMenu/DesktopMenu";
import {MobileMenu} from "layout/header/headerMenu/mobileMenu/MobileMenu";
import {SocialsIconList} from "components/socials/Socials";
import {S} from "layout/header/Header_Styles" ;;

export type MenuItemType = {
    title: string
    href: string
}

const menuItems = [
    {
        title: "Home",
        href: "main",
    },
    {
        title: "About",
        href: "cvblock",
    },
    {
        title: "Tech Stack",
        href: "techstack",
    },
    {
        title: "Projects",
        href: "projects",
    },
    {
        title: "Contact",
        href: "contacts",
    }

];

export const Header: React.FC = () => {

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1060;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo iconId={"logo"}/>

                    { width < breakpoint ? <MobileMenu  menuItems={menuItems}/>
                            : <DesktopMenu menuItems={menuItems}/> }

                    <SocialsIconList/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};