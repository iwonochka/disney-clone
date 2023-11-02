import React from 'react'
import { Nav, Logo } from './styles'
import SignedInHeader from './SignedInHeader'

function Header() {

  const renderHeader = () => {
    return <SignedInHeader/>
  }

  return (
    <Nav>
      <Logo src="https://cnbl-cdn.bamgrid.com/assets/7ecc8bcb60ad77193058d63e321bd21cbac2fc67281dbd9927676ea4a4c83594/original"
      alt="Disney Logo" />
      {renderHeader()}
    </Nav>
  )
}

export default Header
