import React from 'react'
import { MovieListType } from '../../../types/MovieList'
import { Container, Content } from './styles'

interface Props {
  movieResult: MovieListType[]
}

function FilmsRow({movieResult}: Props) {

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
    <Container>
      <Content {...settings}>

      </Content>
    </Container>
  )
}

export default FilmsRow
