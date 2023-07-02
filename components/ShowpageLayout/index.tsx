import React from 'react'
import { MovieListType } from '../../types/MovieList'
import { Container } from './styles';

interface Props {
  movieResults: MovieListType;
}

function ShowpageLayout({movieResults}: Props) {

  const containerStyle = {
    backgroundImage: `url(${movieResults.backgroundImg})`
  }
  return (
    <Container
     // pass dynamic value into styles
     style={containerStyle}
    >

    </Container>
  )
}

export default ShowpageLayout
