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
query products($category_id: ID!) {
  products(where: { category:{id_eq: $category_id}}) {
      id
      title
      title_ar
      description
      description_ar
      brand
      category{
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

const ProductsCollection = ({ type, col, category_id }) => {
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
      type: type,
      indexFrom: 0,
      limit: 20,
      category_id: category_id
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
            columnClassName={`isotopeSelector ${
              col == "metro"
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
                    category={category_id}
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

export default ProductsCollection;
