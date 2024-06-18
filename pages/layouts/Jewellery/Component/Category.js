import React, { Fragment } from "react";
import {
  svgDiamond,
  svgEarings,
  svgNeckles,
  svgRings,
} from "../../../../services/script";
import { Container, Row, Col } from "reactstrap";

const Data = [
  {
    img: svgRings,
    title: "rings",
    link: "http://localhost:3000/categories/14",
  },
  {
    img: svgDiamond,
    title: "diamonds",
    link: "http://localhost:3000/categories/23",
  },
  {
    img: svgNeckles,
    title: "necklaces",
    link: "http://localhost:3000/categories/15",
  },
  {
    img: svgEarings,
    title: "earrings",
    link: "http://localhost:3000/categories/17",
  },
];

const MasterCategory = ({ img, title, link }) => {
  return (
    <div className="category-block">
      <a href={link}>
        <div className="category-image svg-image">
          <div dangerouslySetInnerHTML={{ __html: img }}></div>
        </div>
      </a>
      <div className="category-details">
        <a href={link}>
          <h5>{title}</h5>
        </a>
      </div>
    </div>
  );
};

const Category = () => {
  return (
    <Fragment>
      <Container>
        <section className="section-b-space border-section border-top-0">
          <Row>
            {Data.map((data, i) => (
              <Col sm="3" key={i}>
                <MasterCategory
                  img={data.img}
                  link={data.link}
                  title={data.title}
                />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </Fragment>
  );
};

export default Category;