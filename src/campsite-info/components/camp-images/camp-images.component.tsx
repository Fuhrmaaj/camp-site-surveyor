import React, { FunctionComponent } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { images } from './assets';

export const CampImages: FunctionComponent = () => {
  return (
    <Carousel>
      <div>
        <img src={images.A} />
        <p className="legend">Legend A</p>
      </div>
      <div>
        <img src={images.B} />
        <p className="legend">Legend B</p>
      </div>
      <div>
        <img src={images.C} />
        <p className="legend">Legend C</p>
      </div>
      <div>
        <img src={images.D} />
        <p className="legend">Legend D</p>
      </div>
      <div>
        <img src={images.E} />
        <p className="legend">Legend E</p>
      </div>
    </Carousel>
  );
};
