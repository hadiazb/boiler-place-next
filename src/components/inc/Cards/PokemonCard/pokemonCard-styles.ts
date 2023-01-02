import tw, { styled, css } from 'twin.macro'

export const StyledTransitionMixin = css`
    ${tw`transition duration-300 ease-in-out delay-200`}
`

export interface StyledPokemonCardProps {
    isActive?: boolean
}

export const StyledPokemonCard = styled.div`
    ${tw`shadow-[0px 3px 6px #00000029] w-full p-4 flex flex-col`}
    ${tw`items-center justify-between cursor-pointer rounded bg-light`}
    ${tw`sm:w-60`}
    ${StyledTransitionMixin}

    ${tw`hover:scale-150 hover:bg-secondary`}


    & p {
        ${tw`w-full flex font-bold capitalize`}
        ${StyledTransitionMixin}
    }

    & p:nth-child(1) {
        ${tw`justify-end`}
    }

    &:hover > p {
        ${tw`!text-white`}
    }
`
