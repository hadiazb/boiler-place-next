import tw, { styled } from 'twin.macro'

export const StyledHeader = styled.header`
    ${tw`bg-primary fixed left-0 top-0 right-0 shadow-[0px 3px 6px #00000029]`}
`

export const StyledHeaderSection = styled.section`
    ${tw`flex items-center justify-between`}
`

export const StyledHeaderPokemon = styled.div`
    ${tw`flex items-center cursor-pointer`}
`
