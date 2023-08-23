import React, {FC} from 'react';
import type {ProductsDto} from '../../model/model';
import {Product} from '../Product/Product';

type ProductsProps = {
  products: ProductsDto[],
}

export const Products:FC<ProductsProps> = ({ products }) => (
  <section className="section">
    <h1 className="title">Phone Catalog</h1>

    {
      products?.map((product:ProductsDto) => (
        <Product
          key={product.id}
          description={product.attributes.description}
          name={product.attributes.name}
          price={product.attributes.price}
          image={product.attributes.image}
        />
      ))
    }
  </section>
)
