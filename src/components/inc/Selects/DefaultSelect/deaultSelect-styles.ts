import tw, { styled } from 'twin.macro'
import Select from 'react-select'

export const StyledWrapperField = styled.div`
    ${tw`my-5`}
`

export const StyledWrapperSelect = styled.div`
    ${tw`h-[64px] flex bg-light relative rounded`}
`

export const StyledDefaultSelectLeft = styled.div`
    ${tw`flex items-center w-full relative px-4 z-20`}
`

export const StyledDefaultSelectRight = styled.div`
    ${tw`absolute z-0 right-0 h-full w-10 flex items-center justify-center`}
`

export const StyledDefaultSelect = styled(Select)`
    ${tw`w-full h-[64px] absolute! left-0`}
`
