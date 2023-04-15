import Image from 'next/image';
import React from 'react';
import HoverVideoPlayer from "react-hover-video-player";


interface Props {
  video: string;
  defaultImage: string;
  name: string;
}

const CategoryContent = ({video, defaultImage, name}: Props) => {
  return (
    <HoverVideoPlayer
      videoSrc={video}
      pausedOverlay={<Image src={defaultImage} alt={name} fill={true} />}
    />
  )
}

export default CategoryContent
