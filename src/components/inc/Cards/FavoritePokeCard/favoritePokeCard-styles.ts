import tw, { styled, css } from 'twin.macro'

export const StyledPokemonCardMixed = css`
    ${tw`shadow-[0px 3px 6px #00000029]  rounded-2xl bg-light`}
`

export const StyledPokemons = styled.div`
    ${tw`flex flex-wrap justify-center items-center gap-3`}
    ${tw`md:justify-around my-11`}
`

export const StyledPokemonDefault = styled.div`
    ${tw`p-6 w-full h-64 flex flex-col items-center justify-around`}
    ${tw`sm:p-8 sm:w-[200px]`}
`

export const StyledCardCtr = styled.div`
    ${StyledPokemonCardMixed}
    ${tw`p-6 w-full h-64 flex flex-col items-center justify-around`}
    ${tw`sm:p-8 sm:w-[200px]`}
`
