import React from "react";
import SliderBanner from "./SliderBanner";
import { Container, Wrapper } from "./styles";
import Categories from "./Categories";
import { VideoData } from "./Categories/Data";
import { MovieListType } from "../../types/MovieList";

interface Props {
  movieResult: MovieListType[]
}

function HomeLayout({movieResult}: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories/>
      <h4>Recommended for You</h4>
      <h4>Trending</h4>
      <h4>New for You</h4>
      <h4>Originals</h4>

    </Container>
  );
}

export default HomeLayout;
