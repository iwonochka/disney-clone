import React from 'react'
import { MovieListType } from '../../../types/MovieList'
import { Container, Content, Wrapper } from './styles'

interface Props {
  movieResult: MovieListType[];
  category: string;
  addMargin?: boolean;
}

function FilmsRow({movieResult, category, addMargin}: Props) {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container addMargin={addMargin}>
      <Content {...settings}>
      {movieResult?.filter((movie) => movie.type === category)
      ?.map((movie) => (
        <div>
          <Wrapper key={movie.id}>
            <img src={movie.cardImg} alt={movie.title} loading='lazy' />
          </Wrapper>
        </div>
      ))}
      </Content>
    </Container>
  )
}

export default FilmsRow
