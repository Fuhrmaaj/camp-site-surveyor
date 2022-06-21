import React, { FunctionComponent } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { imageArray } from './assets';

const CarouselItems = imageArray.map((image) => 
  <div>
    <img src={image} alt="" />
    <p className="legend">Legend {image}</p>
  </div>
);

export const CampImages: FunctionComponent = () => {
  return (
    <Carousel>
      {CarouselItems}
    </Carousel>
  );
};
