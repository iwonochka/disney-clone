import React from "react";
import SliderBanner from "./SliderBanner";
import { Container } from "./styles";
import Categories from "./Categories";

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
