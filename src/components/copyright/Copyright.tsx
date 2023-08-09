import React from 'react';
import {S} from "./Copyright_Styles";

export const Copyright:React.FC = () => {
    return (
        <S.Copyright>© 2023 Designed and built
            by <span>Ivan Dolgikh</span> with <span>Love</span> & <span>Coffee</span></S.Copyright>
    );
};