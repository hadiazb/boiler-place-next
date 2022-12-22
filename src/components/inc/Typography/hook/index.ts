import { useEffect, useState } from 'react'
import { Theme } from '../../../../assets/style/Theme'

import {
    StyledTypographyH1,
    StyledTypographyH2,
    StyledTypographyH3,
    StyledTypographyH4,
    StyledTypographyH5,
    StyledTypographyH6,
    StyledTypographyA,
    StyledTypographyP,
    StyledTypographySpan,
} from '../styles'

export type UseTypography = {
    variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
    color?:
        | 'primary'
        | 'secondary'
        | 'dark'
        | 'danger'
        | 'warning'
        | 'light'
        | 'success'
        | 'warning'
}

export const useTypography = ({ variant, color }: UseTypography) => {
    const { colors } = Theme()
    const [colorAux] = useState(colors)
    const [component] = useState({
        h1: StyledTypographyH1,
        h2: StyledTypographyH2,
        h3: StyledTypographyH3,
        h4: StyledTypographyH4,
        h5: StyledTypographyH5,
        h6: StyledTypographyH6,
        a: StyledTypographyA,
        p: StyledTypographyP,
        span: StyledTypographySpan,
    })

    const [StyledTypography, setStyledTypography] = useState(component[variant] as any)
    const [StyledColor, setStyledColor] = useState(colorAux[color || 'dark'])

    useEffect(() => {
        setStyledTypography(component[variant])
        setStyledColor(colorAux[color || 'dark'])
    }, [variant, component, color, colorAux])

    return {
        StyledTypography,
        StyledColor,
    }
}
