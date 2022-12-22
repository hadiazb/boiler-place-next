import { createGlobalStyle, DefaultTheme } from 'styled-components'

import resetStyles from './ResetStyles'
import { getMontserratFont, getHelveticaFont } from './webfonts'

// type definitions
export type GlobalStyleProps = {
  reset?: boolean
}

export type CustomStylesProps<T = DefaultTheme> = GlobalStyleProps & {
  theme: T
}

export const GlobalStyle = createGlobalStyle<CustomStylesProps>`

    /* load fonts */
    ${getMontserratFont()}
    ${getHelveticaFont()}

    ${(props) => (props.reset ? resetStyles() : '')}
`
