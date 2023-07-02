import React from 'react'
import { MovieListType } from '../../types/MovieList'
import { Container, ImageTitle } from './styles';

interface Props {
  movieResults: MovieListType;
}

function ShowpageLayout({movieResults}: Props) {

  const containerStyle = {
    backgroundImage: `url(${movieResults.backgroundImg})`
  }
  return (
    // pass dynamic value into styles
    <Container style={containerStyle}>
      <ImageTitle>
        <img src={movieResults.titleImg} alt="" />
      </ImageTitle>
    </Container>
  )
}

export default ShowpageLayout
