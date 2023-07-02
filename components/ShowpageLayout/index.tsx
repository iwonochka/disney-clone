import React from 'react'
import { MovieListType } from '../../types/MovieList'
import { AddButton, Container, Controls, GroupWatchButton, ImageTitle, PlayButton, TrailerButton } from './styles';

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
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="play button" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="trailer button" />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" alt="group watch button" />
        </GroupWatchButton>
      </Controls>
    </Container>
  )
}

export default ShowpageLayout
