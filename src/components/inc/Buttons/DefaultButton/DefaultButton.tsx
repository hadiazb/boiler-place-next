import { ReactElement } from 'react'

import { ButtonStyled } from './styles'

export interface StyledType {
    outline?: boolean
    styledType?:
        | 'primary'
        | 'secondary'
        | 'success'
        | 'warning'
        | 'info'
        | 'danger'
        | 'light'
        | 'dark'
}

export interface DefaultButtonProps extends StyledType {
    text: string
    type: 'button' | 'submit' | 'reset' | undefined
    disabled: boolean
    children?: React.ReactNode
    className?: string
    handleClick?: () => void
}

const DefaultButton: React.FC<DefaultButtonProps> = ({
    text,
    type,
    children,
    disabled,
    styledType,
    handleClick,
    outline,
    className,
    ...props
}): ReactElement => {
    return !children ? (
        <ButtonStyled
            className={className}
            onClick={handleClick}
            disabled={!disabled}
            type={type}
            styledType={styledType}
            outline={outline}
            {...props}
        >
            {text}
        </ButtonStyled>
    ) : (
        <ButtonStyled
            className={className}
            onClick={handleClick}
            disabled={!disabled}
            type={type}
            styledType={styledType}
            outline={outline}
            {...props}
        >
            {children}
        </ButtonStyled>
    )
}

export default DefaultButton
