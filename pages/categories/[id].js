import React, { useEffect } from 'react';
import CommonLayout from '../../components/shop/common-layout';
// import { withApollo } from '../../helpers/apollo/apollo';
import { Media, Container, Row, Col } from 'reactstrap';
import menu2 from '../../public/assets/images/mega-menu/2.jpg';
import Products from "../../components/common/Collections/Collection12";
import { useRouter } from 'next/router'
import i18next from "../../components/constant/i18n";
import { useTranslation } from "react-i18next";
import { useQuery, gql } from '@apollo/client';

const GET_SINGLE_CATEGORY = gql`
  query GetCategories($id: ID!)  {
    category(id: $id) {
      id
      title
      title_ar
      description
      description_ar
      image {
        url
      }
    }
  }
`;

const Metro = () => {
    const { t } = useTranslation();
    const selectedLanguage = i18next.language;
    const router = useRouter();
    const strapiBaseUrl = process.env.STRAPI_ROOT_URL || 'http://localhost:1337';
    const { loading, error, data } = useQuery(GET_SINGLE_CATEGORY, {
        variables: {
            id: router.query.id,
        }
    });
    useEffect(() => { }, [t])
    return (
        <CommonLayout title="collection" parent="home" >
            <section className="">
                <div className="collection-wrapper">
                    <Container>
                        <Row>
                            <Col className="collection-content">
                                <div className="page-main-content">
                                    <div className="top-banner-wrapper">
                                        <a href={null}>
                                            <Media src={!data || !data.category || data.category.length === 0 || loading ? (
                                                menu2.src
                                            ) : `${strapiBaseUrl}${data.category.image[0].url}`} className="img-fluid blur-up lazyload" alt="" />
                                        </a>
                                        <div className="top-banner-content small-section pb-0">
                                            <h4>{!data || !data.category || data.category.length === 0 || loading ? (
                                                "loading"
                                            ) : (selectedLanguage == 'en') ? data.category.title : data.category.title_ar}</h4>
                                            <h5>{!data || !data.category || data.category.length === 0 || loading ? (
                                                "loading"
                                            ) : (selectedLanguage == 'en') ? data.category.description : data.category.description_ar}</h5>
                                            {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                                            to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> */}
                                        </div>
                                    </div>
                                    <div className="collection-product-wrapper">
                                        <Products type="metro" col="metro"
                                            category_id={router.query.id}
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </CommonLayout>
    )
}

export default Metro;