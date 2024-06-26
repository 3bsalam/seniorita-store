import React, { useContext } from 'react';
import Slider from 'react-slick';
import Masonry from "react-masonry-css";
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { Product4 } from '../../../services/script'
import ProductItem from '../product-box/ProductBox1';
import PostLoader from '../PostLoader';
import {Media, Row, Col, Container } from 'reactstrap';
import CartContext from '../../../helpers/cart';
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext';
import { CompareContext } from '../../../helpers/Compare/CompareContext';
import emptySearch from "../../../public/assets/images/empty-search.jpg";
import i18next from "../../constant/i18n";
import ProductBox from '../product-box/ProductBox9';

const GET_PRODUCTS = gql`
query products {
    products(limit: 8) {
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

const TopCollection = ({ type, title, subtitle, designClass, line, noSlider, cartClass, productDetail, noTitle, titleClass, innerTitle }) => {
    const cartContext = useContext(CartContext);
    const wishlistContext = useContext(WishlistContext);
    const compareContext = useContext(CompareContext);
    const quantity = cartContext.quantity;
    const strapiBaseUrl = process.env.STRAPI_ROOT_URL || 'http://localhost:1337';
    const selectedLanguage = i18next.language;
    const breakpointColumnsObj = {
        default: 4,
        1199: 3,
        767: 2,
        500: 1
      };

    var { loading, data } = useQuery(GET_PRODUCTS, {
        variables: {
            type: type,
            indexFrom: 0,
            limit: 8
        }
    });

    return (
        <>
            <section className={designClass}>
                {noSlider ?
                    <Container>
                        <Row>
                            <Col>
                                {
                                    noTitle ?
                                        ''
                                        :
                                        <div className={titleClass}>
                                            {subtitle ? <h4>{subtitle}</h4> : ''}
                                            <h2 className={innerTitle}>{title}</h2>
                                                {line ?
                                                <div className="line"><span></span></div>
                                                : ''}
                                        </div>
                                }

                                {(!data || !data.products  || data.products.length === 0 || loading) ?
                                    (data && data.products && data.products && data.products.length === 0) ?
                                        <Col xs="12">
                                            <div>
                                                <div className="col-sm-12 empty-cart-cls text-center">
                                                    <Media src={emptySearch} className="img-fluid mb-4 mx-auto" alt="" />
                                                    <h3><strong>Your Cart is Empty</strong></h3>
                                                    <h4>Explore more shortlist some items.</h4>
                                                </div>
                                            </div>
                                        </Col>
                                        :
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
                                    :
                                    <Masonry
                                    breakpointCols={breakpointColumnsObj}
                                    className="isotopeContainer row"
                                    columnClassName={`isotopeSelector ${
                                        "col-xl-3 col-sm-6"
                                    }`}
                                  >
                                    {data &&
                                      data.products
                                        .slice(0, 8)
                                        .map((product, index) => (
                                          <ProductBox
                                            product={product}
                                            category={product.category.id}
                                            productDetail={productDetail}
                                            addCart={() => cartContext.addToCart(product, quantity)}
                                            addWish={() => wishlistContext.addToWish(product)}
                                            addCompare={() => compareContext.addToCompare(product)}
                                            key={index}
                                          />
                                        ))}
                                  </Masonry>
                                    
                                }
                            </Col>
                        </Row>
                    </Container>
                    :
                    <>
                        <div className="title1 title-gradient  section-t-space">
                            {subtitle ? <h4>{subtitle}</h4> : ''}
                            <h2 className="title-inner1">{title}</h2>
                        </div>
                        <Container>
                            <Row>
                                {data && data.products.slice(0, 8).map((product, index) =>
                                    <Col xl="3" sm="6" key={index}>
                                        <div>
                                            <ProductBox product={product} productDetail={productDetail}
                                                addCompare={() => contextCompare.addToCompare(product)}
                                                addWishlist={() => contextWishlist.addToWish(product)}
                                                addCart={() => context.addToCart(product, quantity)} key={index} />
                                        </div>
                                    </Col>
                                )
                                }
                            </Row>
                        </Container>
                    </>
                }

            </section>
        </>
    )
}


export default TopCollection;