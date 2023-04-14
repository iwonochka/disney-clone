import React from 'react'
import { Container } from './styles'
import { EmailInput, SignUpLink } from './styles'
import { signIn } from 'next-auth/react'


const Input = () => {
  return (
    <Container>
      <EmailInput placeholder='e-mail'>

      </EmailInput>
      <SignUpLink onClick={() => signIn()}>Sign Up</SignUpLink>

    </Container>
  )
}

export default Input
