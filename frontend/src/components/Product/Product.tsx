import React, {FC} from 'react';
import type {ProductsAttributes} from '../../model/model';
import {imgPath} from '../../utils/imgPath';

export const Product:FC<Pick<ProductsAttributes, 'description' | 'name' | 'price' | 'image'>> = ({
  description,
  name,
  price,
  image,
}) => (
  <div className="product">
    <div className="img-box">
      {
        image?.data.map(image => (
          <img
            key={image.id}
            src={imgPath(image.attributes.url)}
            alt="Image"
          />
        ))
      }
    </div>

    <article className="product-content">
      <h2 className="product-title">
        { name }
      </h2>

      <p className="product-description">{ description }</p>

      <p className="product-price">
        <span className="product-price__text">Price:</span>

        { price }
      </p>
    </article>
  </div>
)
