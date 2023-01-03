import tw, { styled, css } from 'twin.macro'

export const StyledPokemonCardMixed = css`
    ${tw`shadow-[0px 3px 6px #00000029]  rounded-2xl bg-light`}
`

export const StyledPokemonPage = styled.section`
    ${tw`my-5`}

    & h1 {
        ${tw`w-full text-center`}
    }
`

export const StyledPokemonCard = styled.div`
    ${tw`flex flex-col items-center gap-5`}
    ${tw`sm:flex-row sm:items-start`}
`

export const StyledPokemonDefault = styled.div`
    ${StyledPokemonCardMixed}
    ${tw`p-6`}
    ${tw`sm:p-8`}
`

export const StyledSprites = styled.div`
    ${StyledPokemonCardMixed}
    ${tw`p-5 sm:w-full md:justify-around`}

    & h2 {
        ${tw`text-center my-5 lg:text-left lg:ml-10`}
    }
`

export const StyledPokemonSprites = styled.div`
    ${tw`flex flex-wrap justify-center items-center gap-3`}
    ${tw`md:justify-around my-11`}
`

export const StyledPokemonSprite = styled.div`
    ${tw`flex flex-col items-center`}

    & p {
        ${tw`lg:text-md`}
    }
`

export const StyledBtnCtr = styled.div`
    ${tw`flex lg:justify-end`}

    & button {
        ${tw`!m-0 w-full lg:w-48`}
    }
`
