import React from 'react'
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

const SliderBanner = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>SliderBanner</Carousel>
  )
}

export default SliderBanner
