import React from "react";
import SliderBanner from "./SliderBanner";
import { Container, Wrapper } from "./styles";
import Categories from "./Categories";
import { VideoData } from "./Categories/Data";

interface Props {}

function HomeLayout({}: Props) {
  return (
    <Container>
      <SliderBanner />
      <Categories/>

    </Container>
  );
}

export default HomeLayout;
