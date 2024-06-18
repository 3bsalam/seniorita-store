import React from "react";
import HeaderOne from "../headers/header-one";
import Breadcrubs from "../common/widgets/breadcrubs";
import Helmet from "react-helmet";
import favicon from "../../public/assets/images/favicon/1.png";
import FooterFive from "/root/seniorita_store/frontend/components/footers/footer-five";

const CommonLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      {/* <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={favicon ? favicon : ""} />
      </Helmet> */}
      <HeaderOne topClass="top-header" logoName="logo.png" />
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />
      <>{children}</>
      <FooterFive logoName={"logo/13.png"} layoutClass="black-subfooter" />
    </>
  );
};

export default CommonLayout;
