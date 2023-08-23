export interface ProductsDataDto {
  data: ProductsDto[];
  meta: any;
}

export interface ProductsDto {
  attributes: ProductsAttributes;
  id: number;
}

export interface ProductsAttributes {
  category: any;
  createdAt: string;
  description: string;
  name: string;
  price: number;
  publishedAt: string;
  updatedAt: string;
  image?: AttributesImageDto;
}

export interface AttributesImageDto {
  data: AttributesImageData[];
}

export interface AttributesImageData {
  attributes: Partial<AttributesImageDataAttributes>;
  id: number;
}

export interface AttributesImageDataAttributes {
  alternativeText: any;
  caption: any;
  createdAt: string;
  ext: string;
  formats: any;
  hash: string;
  height: number
  mime: string;
  name: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  size: number;
  updatedAt: string;
  width: number;
  url: string;
}

export interface CategoryDto {
  data: CategoryData[];
}

export interface CategoryData {
  attributes: CategoryDataAttributes;
}

export interface CategoryDataAttributes {
  createdAt: string;
  name: string;
  publishedAt: string;
  updatedAt: string;
}
