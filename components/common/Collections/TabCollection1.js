import React, { useState, useContext, Fragment } from "react";
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
import { Product5 } from "/root/seniorita_store/frontend/services/script";
import i18next from "../../../components/constant/i18n";


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

const TabContent = ({ data, col }) => {
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const quantity = cartContext.quantity;

  const selectedLanguage = i18next.language;
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    767: 2,
    500: 1
  };

  return (
    <Fragment>
      <section className="portfolio-section portfolio-padding metro-section port-col">
        <Container fluid={col === "full"}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="isotopeContainer row"
            columnClassName={`isotopeSelector ${col === "metro"
              ? "col-xl-3 col-sm-6"
              : "col-xl-2 col-lg-3 col-md-4 col-sm-6"
              }`}
          >
            {data && data.products
              .slice(0, 20)
              .map((product, index) => (
                <ProductBox
                  product={product}
                  category={product.category.id}
                  addCart={() => cartContext.addToCart(product, quantity)}
                  addWish={() => wishlistContext.addToWish(product)}
                  addCompare={() => compareContext.addToCompare(product)}
                  key={index}
                  specialClass="special-product-box"
                />
              ))}
          </Masonry>
        </Container>
      </section>
    </Fragment>
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

  const filterVariables = activeTab === 'New' ? { isNew: true } : { isSale: true };

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
                col="full"
              />
            </TabPanel>
            <TabPanel>
              <TabContent
                data={data}
                type="jewellery"
                designClass="p-t-0 j-box ratio_square"
                productSlider={Product5}
                noSlider={true}
                cartClass="cart-info cart-wrap"
                col="full"
              />
            </TabPanel>
          </Tabs>
        </Container>
      </section>
    </div>
  );
};

export default SpecialProducts;