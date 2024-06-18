import React, { Fragment, useContext, useEffect } from "react";
import { Container } from "reactstrap";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import CartContext from "../../../helpers/cart";
import Masonry from "react-masonry-css";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import ProductBox from "../product-box/ProductBox9";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import i18next from "../../../components/constant/i18n";

const GET_PRODUCTS = gql`
 
query products($isNew: Boolean, $isSale: Boolean, $isTop: Boolean) {
  products(
    where: {
      new: $isNew
      sale: $isSale
      top: $isTop
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


const ProductsCollection2 = ({ type, col, isNew, isSale, isTop }) => {
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const quantity = cartContext.quantity;
  const selectedLanguage = i18next.language
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    767: 2,
    500: 1
  };

  var { data } = useQuery(GET_PRODUCTS, {
    variables: {
      isNew: isNew,
      isSale: isSale,
      isTop: isTop
    },
  });
  useEffect(() => {

    if (data) {
      console.log('Fetched products:', data);
    }
  }, [data]);


  return (
    <Fragment>
      <section className="portfolio-section portfolio-padding metro-section port-col">
        <Container fluid={col == "full"}>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="isotopeContainer row"
            columnClassName={`isotopeSelector ${col == "metro"
                ? "col-xl-3 col-sm-6"
                : "col-xl-2 col-lg-3 col-md-4 col-sm-6"
              }`}
          >
            {data &&
              data.products
                .slice(0, 20)
                .map((product, index) => (
                  <ProductBox
                    product={product}
                    category={product.category.id}
                    addCart={() => cartContext.addToCart(product, quantity)}
                    addWish={() => wishlistContext.addToWish(product)}
                    addCompare={() => compareContext.addToCompare(product)}
                    key={index}
                  />
                ))}
          </Masonry>
        </Container>
      </section>
    </Fragment>
  );
};

export default ProductsCollection2;
