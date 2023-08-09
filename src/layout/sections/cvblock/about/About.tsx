import React from 'react';
import {SectionTitle} from "components/SectionTitle";
import {Text} from "components/Text";
import {S} from "./About_Styles"


export const About: React.FC = () => {
    return (
        <S.About>
            <SectionTitle>About Me</SectionTitle>
            <Text>The Generator App is an online tool that helps you to export ready-made templates ready to work as
                your future website. It helps you to combine slides, panels and other components and export it as a
                set of static files: HTML/CSS/JS.</Text>
        </S.About>
    );
};
