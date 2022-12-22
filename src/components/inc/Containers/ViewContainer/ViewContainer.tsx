import { ReactElement } from 'react'

import { ContainerViewStyled } from './styles'

export interface ViewContainerProps {
    children?: React.ReactNode
    className?: string
}

const ViewContainer: React.FC<ViewContainerProps> = ({ children, className }): ReactElement => {
    return <ContainerViewStyled className={className}>{children}</ContainerViewStyled>
}

export default ViewContainer
