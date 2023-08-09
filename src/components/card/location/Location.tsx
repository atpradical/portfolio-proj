import React from 'react';
import {S} from "./Location_Styles"
import {SC} from "../company/Company_Styles"

type LocationPropsType = {
    companyLocation?: string;
}

export const Location:React.FC<LocationPropsType> = (props: LocationPropsType) => {
    return (
        <S.Location>
            <SC.CardText>{props.companyLocation}</SC.CardText>
        </S.Location>
    );
};

