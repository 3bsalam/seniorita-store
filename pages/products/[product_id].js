import React from 'react';
import CommonLayout from '../../../components/shop/common-layout';
import LeftImagePage from './product/leftImagePage';
// import { withApollo } from '../../helpers/apollo/apollo';
import ProductTab from './common/product-tab';
import ProductSection from './common/product_section';
import { useRouter } from 'next/router'

const ThumbnailLeft = () => {
  const router = useRouter()
  const category = router.query.category_id;
  const product_id = router.query.product_id;
    return (
        <CommonLayout parent="home" title="product">
            <LeftImagePage product_id={product_id} />
            <ProductTab product_id={product_id} />
            <ProductSection product_id={product_id} category={category} />
        </CommonLayout>
    )
}

export default ThumbnailLeft; 