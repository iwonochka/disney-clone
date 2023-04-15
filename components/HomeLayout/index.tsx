import React from "react";
import SliderBanner from "./SliderBanner";
import { Container } from "./styles";

interface Props {}

function HomeLayout({}: Props) {
  return (
    <Container>
      <SliderBanner />

    </Container>
  );
}

export default HomeLayout;
