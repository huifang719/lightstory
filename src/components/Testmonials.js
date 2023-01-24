/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable no-unused-vars */
/* eslint-disable space-infix-ops */
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const Testmonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(async () => {
    const clientID = '156810727351-i87vikc9cqt2ti5eik59b55vhmt02eqj.apps.googleusercontent.com';
    const businessID = process.env.REACT_APP_BUSINESS_ID;
    const placeID = process.env.REACT_APP_PLACE_ID;
    const secret = process.env.REACT_APP_GOOGLE_SECRET;
    const res = await fetch(
      `https://mybusiness.googleapis.com/v4/accounts/${businessID}/locations/${placeID}/reviews`,
      {
        method: 'GET',
        headers: {
          'clientID': clientID,
          'secret': secret,
        },
      },
    );
    console.log(res);
  }, []);

  return (
    <Container fluid className="pageContainer">
      <div data-token="IU4GRsIL3wsrJsusynAmWlP7A2QFuzrUhbLUCnBekKzGL1y3YQ" className="romw-reviews" />
      <script src="https://reviewsonmywebsite.com/js/embedLoader.js?id=03d30ab029f3709eb7ee597570569e34" type="text/javascript" />
    </Container>
  );
};

export default Testmonials;
