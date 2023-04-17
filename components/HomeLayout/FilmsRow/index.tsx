import React from 'react'
import { MovieListType } from '../../../types/MovieList'
import { Container } from './styles'

interface Props {
  movieResult: MovieListType[]
}

function FilmsRow({movieResult}: Props) {
  return (
    <Container>FilmsRow</Container>
  )
}

export default FilmsRow
