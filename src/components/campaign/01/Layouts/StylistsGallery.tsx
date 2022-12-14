import React from "react";
// sudo yarn add @types/react-image-gallery でエラーを解消
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const StylistsGallery = () => {
  const images = [
    {
      original: "/campaign/Tomoya_01.jpg",
      thumbnail: "/campaign/Tomoya_01.jpg",
    },
    {
      original: "/campaign/Nami_01.jpg",
      thumbnail: "/campaign/Nami_01.jpg",
    },
    {
      original: "/campaign/Maho_01.jpg",
      thumbnail: "/campaign/Maho_01.jpg",
    },
    {
      original: "/campaign/Yuka_01.jpg",
      thumbnail: "/campaign/Yuka_01.jpg",
    },
    {
      original: "/campaign/Mai_01.jpg",
      thumbnail: "/campaign/Mai_01.jpg",
    },
    {
      original: "/campaign/Ikemoto_01.jpg",
      thumbnail: "/campaign/Ikemoto_01.jpg",
    },
    {
      original: "/campaign/Fujii_01.jpg",
      thumbnail: "/campaign/Fujii_01.jpg",
    },
    {
      original: "/campaign/John_01.jpg",
      thumbnail: "/campaign/John_01.jpg",
    },
    {
      original: "/campaign/Dai_03.jpg",
      thumbnail: "/campaign/Dai_03.jpg",
    },
    {
      original: "/campaign/Natsuki_01.jpg",
      thumbnail: "/campaign/Natsuki_01.jpg",
    },
    {
      original: "/campaign/Nozomi_01.jpg",
      thumbnail: "/campaign/Nozomi_01.jpg",
    },
    {
      original: "/campaign/Mika_01.jpg",
      thumbnail: "/campaign/Mika_01.jpg",
    },
    {
      original: "/campaign/Katayama_01.jpg",
      thumbnail: "/campaign/Katayama_01.jpg",
    },
  ];
  return (
    <>
      <ImageGallery items={images} />
    </>
  );
};

export default StylistsGallery;
