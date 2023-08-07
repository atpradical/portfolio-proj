import {theme} from "styles/Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: number
    Fmin?: number
    Fmax?: number
}

export const font = ({family, weight, color, lineHeight, Fmin, Fmax}: FontPropsType) =>`
    font-family: ${family || "Poppins"};
    font-weight: ${weight || 400};
    color: ${color || theme.colors.normalFont};
    line-height: ${lineHeight || 26};
    font-size: calc((100vw - 360px) / (1220 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`

