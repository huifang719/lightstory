import React from 'react';
import { Container, Breadcrumb } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaHome, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <Container fluid className="d-flex justify-content-center mt-2 mb-2">
      <IconContext.Provider value={{ size: '2rem', color: '#fca311' }}>
        <Breadcrumb>
          <Breadcrumb.Item href="#"><FaHome /></Breadcrumb.Item>
          <Breadcrumb.Item href="https://www.instagram.com/lightstory_photography/">
            <FaInstagram />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="https://www.facebook.com/Lightstory-Photography-2019656558340251/"><FaFacebook /></Breadcrumb.Item>
          <Breadcrumb.Item href="https://twitter.com/Lightstory_foto"><FaTwitter /></Breadcrumb.Item>
        </Breadcrumb>
      </IconContext.Provider>
    </Container>
  );
};

export default SocialMedia;
