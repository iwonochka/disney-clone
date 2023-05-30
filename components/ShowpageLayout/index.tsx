import React from 'react'
import { MovieListType } from '../../types/MovieList'
import { Container } from './styles';

interface Props {
  movieResults: MovieListType;
}

function ShowpageLayout({movieResults}: Props) {
  return (
    <Container
      style={{
      backgroundImage: `url(${movieResults.backgroundImg})`,
      opacity: "0.8",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      }}
    >

    </Container>
  )
}

export default ShowpageLayout
