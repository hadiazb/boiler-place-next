import { ReactElement } from 'react'
import { useTypography } from './hook'

export interface TypographyProps {
  children?: React.ReactNode
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'a'
  className?: string
  target?: boolean
  href?: string
  color?: 'primary' | 'secondary' | 'dark' | 'danger' | 'warning' | 'light' | 'success' | 'warning'
  onClick?: () => void
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant,
  className,
  color,
  href,
  target,
  onClick,
}): ReactElement => {
  const { StyledTypography, StyledColor } = useTypography({ variant, color })

  return (
    <StyledTypography
      target={target ? '_blank' : ''}
      href={href}
      style={{ color: StyledColor }}
      onClick={onClick}
      variant={variant}
      className={className}
    >
      {children}
    </StyledTypography>
  )
}

export default Typography
