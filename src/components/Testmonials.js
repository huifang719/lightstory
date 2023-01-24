import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const Testmonials = () => {
  const [reviews, setReviews] = useSate([]);

  const getReviews = async () = {
    const clientID = '156810727351-i87vikc9cqt2ti5eik59b55vhmt02eqj.apps.googleusercontent.com';
    const response = await fetch(
      'https://mybusiness.googleapis.com/v4/accounts/10800535903591651999/locations/ChIJs8i596K4sGoR9U4iYSV6d54/reviews',
      {
        method: 'GET',
        headers: {
          'clientID': clientID,
          'secret': process.env.REACT-APP-GOOGLE-SECRET
        }
      }
    )

  }
  return (
    <Container fluid className="pageContainer">
      <div data-token="IU4GRsIL3wsrJsusynAmWlP7A2QFuzrUhbLUCnBekKzGL1y3YQ" className="romw-reviews" />
      <script src="https://reviewsonmywebsite.com/js/embedLoader.js?id=03d30ab029f3709eb7ee597570569e34" type="text/javascript" />
    </Container>
  );
};

export default Testmonials;
