import React from 'react';
import {SC} from "./Company_Styles"

type CompanyPropsType = {
    companyName: string;
}

export const Company:React.FC<CompanyPropsType> = (props: CompanyPropsType) => {
    return (
        <SC.Company>
            <SC.CardText>{props.companyName}</SC.CardText>
        </SC.Company>
    );
};