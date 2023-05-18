import React from "react";
import SliderBanner from "./SliderBanner";
import { Container, Wrapper } from "./styles";
import Categories from "./Categories";
import { VideoData } from "./Categories/Data";
import { MovieListType } from "../../types/MovieList";
import FilmsRow from "./FilmsRow";

interface Props {
  movieResult: MovieListType[]
}

function HomeLayout({movieResult}: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories/>
      <h4>Recommended for You</h4>
      <FilmsRow movieResult={movieResult} category='recommend'/>
      <h4>Trending</h4>
      <FilmsRow movieResult={movieResult} category='trending'/>
      <h4>New for You</h4>
      <FilmsRow movieResult={movieResult} category='new'/>
      <h4>Originals</h4>
      <FilmsRow movieResult={movieResult} category='original' addMargin/>

    </Container>
  );
}

export default HomeLayout;
