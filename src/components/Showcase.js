/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/no-array-index-key */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ShowcaseImg from './ShowcaseImg';

const Showcase = () => {
  return (
    <Carousel fade className="container-fluid">
      {ShowcaseImg.map((img, index) =>
        <Carousel.Item key={index}>
          <img
            className="d-block h-100"
            src={img}
            alt="First slide"
          />
        </Carousel.Item>,
      // eslint-disable-next-line function-paren-newline
      )}
    </Carousel>
  );
};

export default Showcase;
