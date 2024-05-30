import React, { useEffect } from "react";
import Slider from "react-slick";
import { Row, Col, Container } from "reactstrap";
import { useLazyQuery } from "@apollo/client";
import { gql } from '@apollo/client';
import { Slider5 } from "../../../services/script";

const GET_PRODUCTS = gql`
query GetAllInstagram {
  instagrams {
    id
    link
    image {
      url
      id
      previewUrl
    }
  }
}`;

const Instagram = ({ type }) => {
  const [getInstagrams, { loading, data }] = useLazyQuery(GET_PRODUCTS);

  useEffect(() => {
    getInstagrams();
  }, [getInstagrams]);

  const strapiBaseUrl = process.env.STRAPI_ROOT_URL || 'http://localhost:1337';

  return (
    <Container>
      <Row>
        <Col md="12">
          <h2 className="title-borderless"># instagram</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
<Slider {...Slider5} className="slide-5 no-arrow slick-instagram">
  {data &&
    data.instagrams.map((instagram) => (
      <div key={instagram.id}> {/* Ensure each item has a unique key */}
        <a href={instagram.link} target="_blank" rel="noopener noreferrer">
          <div className="instagram-box">
            <img
              src={`${strapiBaseUrl}${instagram.image.url}`}
              alt="Instagram"
            />
            <div className="overlay">
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </div>
          </div>
        </a>
      </div>
    ))}
</Slider>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Instagram;
