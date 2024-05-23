import React, { useState, useContext, useEffect } from "react";
import { Row, Col, Media, Modal, ModalBody, ModalHeader } from "reactstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import CartContext from "../../../helpers/cart";
import i18next from "../../../components/constant/i18n";
import { useTranslation } from "react-i18next";

const ProductBox = ({ product, category, addCart, addWish, addCompare }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const category_id = router.query.category_id || category
  const [modalCompare, setModalCompare] = useState(false);
  const toggleCompare = () => setModalCompare(!modalCompare);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const curContext = useContext(CurrencyContext);
  const currency = curContext.state;
  const cartContext = useContext(CartContext);
  const plusQty = cartContext.plusQty;
  const minusQty = cartContext.minusQty;
  const quantity = cartContext.quantity;
  const setQuantity = cartContext.setQuantity;
  const uniqueTags = [];
  const strapiBaseUrl = process.env.STRAPI_ROOT_URL || 'http://localhost:1337';
  const selectedLanguage = i18next.language

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const clickProductDetail = () => {
    router.push(`/categories/${category_id}/products/${product.id}`);

  };

  useEffect(() => {

  }, [t])
  return (
    <div className="product-box">
      <div className="img-wrapper">
        <div className="lable-block">
          {product.new === true ? <span className="lable3">new</span> : ""}
          {product.sale === true ? <span className="lable4">on sale</span> : ""}
        </div>
        <div className="front" onClick={clickProductDetail}>
          <a href={clickProductDetail}>
            <Media
              src={`${strapiBaseUrl}${product.images[0].url}`}
              className="img-fluid blur-up lazyload"
              alt=""
            />
          </a>
        </div>
        <div className="cart-info cart-wrap">
          <button
            data-toggle="modal"
            data-target="#addtocart"
            title="Add to cart">
            <i className="fa fa-shopping-cart" onClick={addCart}></i>
          </button>
          <a href={null} title="Add to Wishlist" onClick={addWish}>
            <i className="fa fa-heart" aria-hidden="true"></i>
          </a>
          <a
            href={null}
            data-toggle="modal"
            data-target="#quick-view"
            title="Quick View"
            onClick={toggle}>
            <i className="fa fa-search" aria-hidden="true"></i>
          </a>
          <a href={null} title="Compare" onClick={toggleCompare}>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div className="product-detail" onClick={clickProductDetail}>
        <a href="#!">
          <h6>{selectedLanguage === 'en' ? product.title : product.title_ar}</h6>
        </a>
        <h4>
          {currency.symbol}
          {(
            (product.price - (product.price * product.discount) / 100) *
            currency.value
          ).toFixed(2)}
          <del>
            {product.sale ? (
              <span className="money">
                {currency.symbol}
                {(product.price * currency.value).toFixed(2)}
              </span>
            ) : null}

          </del>
        </h4>
      </div>
      <Modal isOpen={modalCompare} toggle={toggleCompare} size="lg" centered>
        <ModalHeader toggle={toggleCompare}>Quick View</ModalHeader>
        <ModalBody>
          <Row className="compare-modal">
            <Col lg="12">
              <div className="media">
                <Media
                  src={`${strapiBaseUrl}${product.images[0].url}`}
                  alt=""
                  className="img-fluid"
                />
                <div className="media-body align-self-center text-center">
                  <h5>
                    <i className="fa fa-check"></i>Item{" "}
                    <span>{selectedLanguage === 'en' ? product.title : product.title_ar} </span>
                    <span> successfully added to your Compare list</span>
                  </h5>
                  <div className="buttons d-flex justify-content-center">
                    <Link href="/page/compare" className="btn-sm btn-solid">
                      {/* <a
                        href={null}
                       
                        onClick={addCompare}
                      > */}
                      View Compare list
                      {/* </a> */}
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="quickview-modal"
        size="lg"
        centered>
        <ModalHeader toggle={toggle}>
          <h5 className="modal-title">Quick View</h5>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col lg="6" xs="12">
              <div className="quick-view-img">
                <Media
                  src={`${strapiBaseUrl}${product.images[0].url}`}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </Col>
            <Col lg="6" className="rtl-text">
              <div className="product-right">
                <h2> {selectedLanguage === 'en' ? product.title : product.title_ar} </h2>
                <h3>
                  {currency.symbol}
                  {(product.price * currency.value).toFixed(2)}
                </h3>
                {product.variants ? (
                  <ul className="color-variant">
                    {uniqueTags ? (
                      <ul className="color-variant">
                        {uniqueTags.map((vari, i) => {
                          return (
                            <li
                              className={vari.color}
                              key={i}
                              title={vari.color}
                              onClick={() =>
                                variantChangeByColor(
                                  vari.image_id,
                                  product.images
                                )
                              }></li>
                          );
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </ul>
                ) : (
                  ""
                )}
                <div className="border-product">
                  <h6 className="product-title">product description</h6>
                  <p>{selectedLanguage === 'en' ? product.description : product.description_ar}</p>
                </div>
                <div className="product-description border-product">
                  {product.size ? (
                    <div className="size-box">
                      <ul>
                        {product.size.map((size, i) => {
                          return (
                            <li key={i}>
                              <a href={null}>{size}</a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                  <h6 className="product-title">{t('quantity')}</h6>
                  <div className="qty-box">
                    <div className="input-group">
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-left-minus"
                          onClick={minusQty}
                          data-type="minus"
                          data-field="">
                          <i className="fa fa-angle-left"></i>
                        </button>
                      </span>
                      <input
                        type="text"
                        name="quantity"
                        value={quantity}
                        onChange={changeQty}
                        className="form-control input-number"
                      />
                      <span className="input-group-prepend">
                        <button
                          type="button"
                          className="btn quantity-right-plus"
                          onClick={() => plusQty(product)}
                          data-type="plus"
                          data-field="">
                          <i className="fa fa-angle-right"></i>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="product-buttons">
                  <button
                    className="btn btn-solid"
                    onClick={() => addCart(product, quantity)}>
                    add to cart
                  </button>
                  <button
                    className="btn btn-solid"
                    onClick={clickProductDetail}>
                    View detail
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default ProductBox;
