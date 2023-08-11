import React from 'react';
import photo from "assets/img/photo.webp"
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/sections/main/Main_Styles";
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.Main id={"main"}>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.TitleText>Hi 👋,</S.TitleText>
                        <S.TitleText>My name is</S.TitleText>
                        <S.Name>Ivan Dolgikh</S.Name>
                        <S.MainTitle>
                            <p>A Web and Frontend Developer</p>
                            <Typewriter options={{
                                strings: ['A Web Developer', 'A Front Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 150,
                            }}
                            />
                        </S.MainTitle>
                    </div>
                    <Tilt className="parallax-effect-glare-scale"
                          perspective={500}
                          glareEnable={true}
                          glareMaxOpacity={0.45}
                          scale={1.02}>
                        <S.PhotoWrapper>
                            <S.Photo src={photo} alt="portrait of Ivan Dolgikh"/>
                        </S.PhotoWrapper>
                    </Tilt>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
