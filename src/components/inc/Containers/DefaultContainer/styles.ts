import styled from 'styled-components'
import tw from 'twin.macro'

export interface ContainerStyledProps {}

export const ContainerStyled = styled.div.attrs({})<ContainerStyledProps>`
    /**
     * Break point until to 640px
     */
    ${tw`mx-5 px-0.5`}
    /**
     * Break point until to 768px
     */
    ${tw`sm:mx-7 sm:px-1`}
    /**
     * Break point until to 1024px
     */
    ${tw` md:mx-8 md:px-2`}
    /**
     * Break point until to 1280px
     */
    ${tw`lg:mx-16 lg:px-4`}
    /**
     * Break point until to 1536px
     */
    ${tw`xl:mx-52 xl:px-8`}
    /**
     * Break point until to infinite
     */
    ${tw`2xl:mx-72 2xl:px-12`}
`
