import React, { useState, useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ProductBox from '../product-box/ProductBox9';
import CartContext from "../../../helpers/cart/index";
import { Container, Media } from "reactstrap";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import PostLoader from "../PostLoader";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import emptySearch from "../../../public/assets/images/empty-search.jpg";
import { useTranslation } from "react-i18next";
import Masonry from "react-masonry-css";

const GET_PRODUCTS = gql`
 
query products($isNew: Boolean, $isSale: Boolean) {
  products(
    where: {
      new: $isNew
      sale: $isSale
    }
  ) {
    id
    title
    title_ar
    description
    description_ar
    brand
    category {
      title
      id
    }
    price
    new
    top
    stock
    sale
    discount
    variants {
      id
      sku
      size
      color
      image_id
    }
    images {
      url
      id
      previewUrl
    }
  }
}
`;

const TabContent = ({
  data,
  loading,
  cartClass,
  backImage,
}) => {
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const quantity = cartContext.quantity;

  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    767: 2,
    500: 1
  };

  return (
    <Container fluid>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="isotopeContainer row"
        columnClassName="isotopeSelector col-xl-3 col-lg-4 col-md-6 col-sm-6"
      >
        {!data ||
        !data.products ||
        data.products.length === 0 ||
        loading ? (
          data &&
          data.products &&
          data.products.length === 0 ? (
            <div className="col-xs-12">
              <div className="empty-cart-cls text-center">
                <Media
                  src={emptySearch}
                  className="img-fluid mb-4 mx-auto"
                  alt=""
                />
                <h3>
                  <strong>{t('Your Cart is Empty')}</strong>
                </h3>
                <h4>{t('Explore more shortlist some items.')}</h4>
              </div>
            </div>
          ) : (
            [...Array(4)].map((_, i) => (
              <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <PostLoader />
              </div>
            ))
          )
        ) : (
          data.products.map((product, i) => (
            <ProductBox
              key={i}
              product={product}
              symbol={currency.symbol}
              addCompare={() => compareContext.addToCompare(product)}
              addCart={() => cartContext.addToCart(product, quantity)}
              addWishlist={() => wishlistContext.addToWish(product)}
              cartClass={cartClass}
              backImage={backImage}
            />
          ))
        )}
      </Masonry>
    </Container>
  );
};

const SpecialProducts = ({
  type,
  fluid,
  designClass,
  cartClass,
  heading,
  noTitle,
  title,
  inner,
  line,
  hrClass,
  backImage,
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('New');
  const context = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const quantity = context.quantity;

  const filterVariables = activeTab == 'New' ? {isNew: true} : {isSale: true}

  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: filterVariables,
  });

  return (
    <div>
      <section className={designClass}>
        <Container fluid={fluid}>
          {noTitle ? (
            ""
          ) : (
            <div className={title}>
              <h4>{t('exclusive products')}</h4>
              <h2 className={inner}>{t('special products')}</h2>
              {line ? (
                <div className="line"></div>
              ) : hrClass ? (
                <hr role="tournament6"></hr>
              ) : (
                ""
              )}
            </div>
          )}

          <Tabs className="theme-tab">
            <TabList className="tabs tab-title">
              <Tab
                className={activeTab === "New arrival" ? "active" : ""}
                onClick={() => setActiveTab("New")}
              >
                {t('NEW ARRIVAL')}
              </Tab>
              <Tab
                className={activeTab === "On sale" ? "active" : ""}
                onClick={() => setActiveTab("Sale")}
              >
                {t('ON SALE')}
              </Tab>
            </TabList>

            <TabPanel>
              <TabContent
                data={data}
                loading={loading}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={data}
                loading={loading}
                cartClass={cartClass}
                backImage={backImage}
              />
            </TabPanel>

          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default SpecialProducts;