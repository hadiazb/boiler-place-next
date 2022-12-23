import { FormHTMLAttributes, ReactNode } from 'react'

import { StyledForm } from './form-styles'

export interface FormProps extends FormHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    onSubmit?: () => void
}

const Form: React.FC<FormProps> = ({ children, className, onSubmit }) => (
    <StyledForm onSubmit={onSubmit} className={className}>
        {children}
    </StyledForm>
)

export default Form
