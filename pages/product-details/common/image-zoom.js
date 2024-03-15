import React from 'react';
import { Media } from 'reactstrap';

const ImageZoom = (props) => {
    const { image } = props;
    const strapiBaseUrl = process.env.STRAPI_ROOT_URL || 'http://localhost:1337';

    return (
        <Media src={`${strapiBaseUrl}${image.url}`} className="img-fluid image_zoom_cls-0" />
    );
}

export default ImageZoom;
