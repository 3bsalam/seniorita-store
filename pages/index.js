import React, { Fragment, useEffect } from "react";
import { Auth0Provider } from '@auth0/auth0-react';
import { Helmet } from "react-helmet";
import HeaderSeven from "/root/seniorita_store/frontend/components/headers/header-seven";
import Banner from "/root/seniorita_store/frontend/pages/layouts/Jewellery/Component/Banner";
import Category from "/root/seniorita_store/frontend/pages/layouts/Jewellery/Component/Category";
import TopCollection from "/root/seniorita_store/frontend/components/common/Collections/homepage_collection";
import Service from "/root/seniorita_store/frontend/components/common/Service/service2";
import SpecialProducts from "/root/seniorita_store/frontend/components/common/Collections/TabCollection1.js";
import Instagram from "/root/seniorita_store/frontend/components/common/instagram/instagram2";
import FooterFive from "/root/seniorita_store/frontend/components/footers/footer-five";
import Paragraph from "/root/seniorita_store/frontend/components/common/Paragraph";
import { Product5 } from "/root/seniorita_store/frontend/services/script";
import ModalComponent from "/root/seniorita_store/frontend/components/common/Modal";
import MasterParallaxBanner from "/root/seniorita_store/frontend/temp layouts/Fashion/Components/MasterParallaxBanner";

const Jewellery = () => {
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-deafult", "#5fcbc4");
  }, []);

  return (
    <Fragment>
      <Auth0Provider
        domain="dev-xao53qv3vckudjea.us.auth0.com"
        clientId="h18K3R6jsXPOewK8V671c4EHJy9Lj6BF"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" type="image/x-icon" href={"/assets/images/favicon/favicon.png"} />
        </Helmet>
        <div className="bg_cls">
          <ModalComponent />
          <HeaderSeven logoName={"logo/13.png"} />
          <Banner />
          <Category />
          <Paragraph
            title="title1  section-t-space title5"
            inner="title-inner1"
            hrClass={true}
          />
          <TopCollection
            type="jewellery"
            designClass="p-t-0 j-box ratio_square"
            productSlider={Product5}
            noSlider={true}
            cartClass="cart-info cart-wrap"
            isTop={true} // Pass the isTop prop here
          />
          <Service layoutClass="section-b-space" />
          <MasterParallaxBanner
            bg="parallax-banner18"
            parallaxClass="text-center p-left"
            title="sale"
            subTitle1="fashion trends"
            subTitle2="special offer"
          />
          <SpecialProducts
            type="jewellery"
            heading="exclusive products"
            title="title1  section-t-space title5"
            inner="title-inner1"
            hrClass={true}
            designClass="p-t-0 j-box ratio_square"
            noSlider={true}
            cartClass="cart-info cart-wrap"
          />
          <section className="instagram ratio_square section-b-space">
            <Instagram type="jewellery" />
          </section>
          <FooterFive logoName={"logo/13.png"} layoutClass="black-subfooter" />
        </div>
      </Auth0Provider>
    </Fragment>
  );
};

export default Jewellery;
