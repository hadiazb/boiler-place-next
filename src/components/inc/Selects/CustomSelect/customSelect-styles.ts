import tw, { styled } from 'twin.macro'

export interface StyledSelectCtrProps {
    overFlow?: boolean
    $isError?: boolean
}

export const StyledSelectCtr = styled.div.attrs({})<StyledSelectCtrProps>`
    ${tw`relative max-w-sm my-7 py-0 px-4 rounded bg-light cursor-pointer overflow-hidden`}
`

export interface StyledDefaultOptionCtrProps {
    border?: boolean
}

export const StyledOptionCtr = styled.div.attrs({})<StyledDefaultOptionCtrProps>`
    ${tw`relative flex justify-between items-center h-16 z-50 bg-light`}

    border-bottom: ${({ border }) => (border ? '1px' : '0px')} solid black;

    & svg {
        ${tw`cursor-pointer`}
    }
`

export const StyledLeftField = styled.div.attrs({})`
    ${tw`flex items-center`}

    & svg {
        ${tw`mr-3`}
    }
`

export const StyledRightField = styled.div.attrs({})`
    ${tw`flex items-center justify-between`}
`

export interface StyledListFieldProps {
    showList?: boolean
}

export const StyledListField = styled.div.attrs({})<StyledListFieldProps>`
    ${tw`relative z-10 rounded`}
    ${({ showList }) => (showList ? tw`block` : tw`hidden`)}

    animation-name: ${({ showList }) => showList && 'bounceDown'};
    animation-duration: 0.6s;
    animation-delay: -0.5s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;

    @keyframes bounceDown {
        0% {
            transform: translateY(-100%);
        }
        50% {
            transform: translateY(-50%);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
        100% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        }
    }
`
