import styled from 'styled-components'
import tw from 'twin.macro'

export interface ContainerViewStyledProps {}

export const ContainerViewStyled = styled.div.attrs({})<ContainerViewStyledProps>`
    ${tw`min-h-[80vh] py-2`}
`
