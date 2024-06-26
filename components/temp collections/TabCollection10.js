import React, { useContext, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Col, Container, Row } from "reactstrap";
import { useQuery } from "@apollo/client";
import { gql } from '@apollo/client';
import PostLoader from "../PostLoader";
import CartContext from "../../../helpers/cart";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import ProductItem from "../product-box/ProductBox10";

const GET_PRODUCTS = gql`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`;

const TabContent = ({ data, loading, startIndex, endIndex }) => {
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const quantity = cartContext.quantity;

  return (
    <div>
      {!data ||
      !data.products ||
      !data.products.items ||
      data.products.items.length === 0 ||
      loading ? (
        <div className="row mx-0 margin-default">
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
          <div className="col-xl-3 col-lg-4 col-6">
            <PostLoader />
          </div>
        </div>
      ) : (
        <Row className=" no-slider">
          {data &&
            data.products.items
              .slice(startIndex, endIndex)
              .map((item, i) => (
                <ProductItem
                  key={i}
                  product={item}
                  addCart={() => cartContext.addToCart(item, quantity)}
                  addWishlist={() => wishlistContext.addToWish(item)}
                  addCompare={() => compareContext.addToCompare(item)}
                />
              ))}
        </Row>
      )}
    </div>
  );
};

const Collection = ({ type }) => {
  const [activeTab, setActiveTab] = useState(type);
  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      type: type,
      indexFrom: 0,
      limit: 8,
    },
  });

  return (
    <>
      <div className="title4  section-t-space">
        <h4>special offer</h4>
        <h2 className="title-inner4">top collection</h2>
        <div className="line">
          <span></span>
        </div>
      </div>
      <section className="section-b-space p-t-0 absolute-product ratio_asos">
        <Container>
          <Row>
            <Col>
              <Tabs className="theme-tab">
                <TabList className="tabs tab-title">
                  <Tab
                    className={activeTab == type ? "active" : ""}
                    onClick={() => setActiveTab(type)}
                  >
                    New Products
                  </Tab>
                  <Tab
                    className={activeTab == "videoslider" ? "active" : ""}
                    onClick={() => setActiveTab("videoslider")}
                  >
                    Featured Products
                  </Tab>
                  <Tab
                    className={activeTab == "videoslider" ? "active" : ""}
                    onClick={() => setActiveTab("videoslider")}
                  >
                    Best Sellers
                  </Tab>
                </TabList>
                <div className="tab-content-cls">
                  <TabPanel className="tab-content active default">
                    <TabContent
                      data={data}
                      loading={loading}
                      startIndex={0}
                      endIndex={8}
                    />
                  </TabPanel>
                  <TabPanel className="tab-content">
                    <TabContent
                      data={data}
                      loading={loading}
                      startIndex={4}
                      endIndex={11}
                    />
                  </TabPanel>
                  <TabPanel className="tab-content">
                    <TabContent
                      data={data}
                      loading={loading}
                      startIndex={0}
                      endIndex={8}
                    />
                  </TabPanel>
                </div>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Collection;
