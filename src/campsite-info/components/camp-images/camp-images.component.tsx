import React, { FunctionComponent } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const CarouselItems = (images: string[]) => {
  return images.map((image) => (
    <div>
      <img src={image} alt="" />
    </div>
  ));
};

export const CampImages: FunctionComponent<{ images?: string[]}> = ({
  images,
}) => {
  return (
    <Carousel emulateTouch infiniteLoop useKeyboardArrows>
      {CarouselItems(images ?? [])}
    </Carousel>
  );
};
