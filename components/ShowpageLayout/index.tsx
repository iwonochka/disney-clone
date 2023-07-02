import React, { useState } from 'react'
import { MovieListType } from '../../types/MovieList'
import { AddButton, Container, Controls, Description, GroupWatchButton, ImageTitle, PlayButton, Details, TrailerButton, PlayerWrapper, Player } from './styles';
import ReactPlayer from 'react-player';

interface Props {
  movieResults: MovieListType;
}

function ShowpageLayout({movieResults}: Props) {
  const [showTrailer, setShowTrailer] = useState(false);

  const handleTrailerClick = () => {
    setShowTrailer(true);
  };

  const containerStyle = {
    backgroundImage: `url(${movieResults.backgroundImg})`
  }
  console.log("trailer:", movieResults.trailer)
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
        <TrailerButton onClick={handleTrailerClick}>
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
      <Details>{movieResults.subTitle}</Details>
      <Description>{movieResults.description}</Description>

      {showTrailer && (
        <PlayerWrapper>
          <Player>
            <ReactPlayer
              url={movieResults.trailer}
              playing={true}
              controls={true}
              light={true}
              width="100%"
              height="100%"
            />
          </Player>
        </PlayerWrapper>
      )}
    </Container>
  )
}

export default ShowpageLayout
