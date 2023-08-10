import React from 'react';
import photo from "assets/img/photo.webp"
import {FlexWrapper} from "components/FlexWrapper";
import {Container} from "components/Container";
import {S} from "layout/sections/main/Main_Styles";
import Typewriter from 'typewriter-effect';

export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper align={"center"} justify={"space-around"} wrap={"wrap"}>
                    <div>
                        <S.TitleText>Hi 👋,</S.TitleText>
                        <S.TitleText>My name is</S.TitleText>
                        <S.Name>Ivan Dolgikh</S.Name>
                        {/*<S.MainTitle>A Web Developer</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>A Web and Frontend Developer</p>
                            <Typewriter options={{
                                strings: ['A Web Developer', 'A Frontend Developer'],
                                autoStart: true,
                                loop: true,
                                delay: 100,
                            }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo} alt="portrait of Ivan Dolgikh"/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};
