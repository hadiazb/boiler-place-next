import { ActiveLink } from '../..'

// styles
import { StyledNavbar } from './navbar-styles'

const Navbar = () => {
  return (
    <StyledNavbar>
      <ActiveLink text="Home" pathname="/" />
      <ActiveLink text="Contact" pathname="/contact" />
      <ActiveLink text="About" pathname="/about" />
    </StyledNavbar>
  )
}

export default Navbar
