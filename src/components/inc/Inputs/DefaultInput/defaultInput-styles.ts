import tw, { styled } from 'twin.macro'

export interface StyledContainerProps {
    focused?: boolean
    $isError?: boolean
}

export const StyledInputContainer = styled.div.attrs({})<StyledContainerProps>`
    ${tw`relative my-7 py-4 pb-3 px-2 h-16 flex flex-col justify-end max-w-sm rounded bg-light duration-[0.1s]`}

    border-bottom: ${({ focused, $isError, theme }) =>
        focused && `2px solid ${$isError ? theme.colors.danger : theme.colors.dark}`};

    & span {
        ${tw`absolute -bottom-5 left-0 text-sm`}
    }
`

export interface StyledLabelProps {
    focused?: boolean
    $isError?: boolean
}

export const StyledLabel = styled.label.attrs({})<StyledLabelProps>`
    ${tw`absolute text-base font-bold h-5 top-[35%] left-5 duration-[0.3s] z-0 font-montserrat`}

    top: ${({ focused }) => focused && 'calc(50% - 1.5rem)'};
    left: ${({ focused }) => focused && '10px'};
    font-size: ${({ focused }) => focused && '11px'};
    font-weight: ${({ focused }) => focused && 'normal'};
    color: ${({ $isError, theme }) => ($isError ? theme.colors.danger : theme.colors.dark)};
`

export const StyledInput = styled.input.attrs({})`
    ${tw`absolute pl-4 pt-5 top-0 left-0 w-full h-full bg-transparent outline-none z-10 font-montserrat`}
`
