import { StyledDefaultLayout } from './defaultLayout.module-styles'

export type DefaultMainLayoutProps = {
  children: React.ReactNode
}

const DefaultMainLayout: React.FC<DefaultMainLayoutProps> = ({ children }) => {
  return (
    <>
      <StyledDefaultLayout>{children}</StyledDefaultLayout>
    </>
  )
}

export default DefaultMainLayout
