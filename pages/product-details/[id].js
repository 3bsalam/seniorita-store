import React from 'react';
import CommonLayout from '../../components/shop/common-layout';
import LeftImagePage from './product/leftImagePage';
// import { withApollo } from '../../helpers/apollo/apollo';
import ProductTab from './common/product-tab';
import ProductSection from './common/product_section';
import { useRouter } from 'next/router'

const ThumbnailLeft = () => {
  const router = useRouter()
  const ids = router.query.id;
  const rangeArray = ids.split('-');
  const category = rangeArray[0];
  const product_id = rangeArray[1];
    return (
        <CommonLayout parent="home" title="product">
            <LeftImagePage product_id={product_id} />
            <ProductTab product_id={product_id} />
            <ProductSection product_id={product_id} category={category} />
        </CommonLayout>
    )
}

export default ThumbnailLeft; 