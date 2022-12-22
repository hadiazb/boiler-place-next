import { ReactElement } from 'react'

import { ContainerStyled } from './styles'

export interface DefaultContainerProps {
    children?: React.ReactNode
    className?: string
}

const DefaultContainer: React.FC<DefaultContainerProps> = ({
    children,
    className,
}): ReactElement => {
    return <ContainerStyled className={className}>{children}</ContainerStyled>
}

export default DefaultContainer
