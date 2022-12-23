import { StyledDefaultLayout } from './viewLayout.module-styles'

export type ViewMainLayoutProps = {
    children: React.ReactNode
}

const ViewMainLayout: React.FC<ViewMainLayoutProps> = ({ children }) => {
    return (
        <>
            <StyledDefaultLayout>{children}</StyledDefaultLayout>
        </>
    )
}

export default ViewMainLayout
