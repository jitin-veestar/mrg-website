export interface ProductAsset {
  url: string;
  mType: string;
  key: string;
  name: string;
}

export interface ProductPrice {
  amount: number;
  currency: string;
}

export interface ProductCategory {
  _id: string;
  title: string;
  slug: string;
  asset?: ProductAsset[];
}

export interface ApiProduct {
  _id: string;
  id?: string;
  company: string;
  title: string;
  slug: string;
  status: string;
  isFeatured?: boolean;
  shortDesc?: string;
  longDesc?: string;
  price: ProductPrice;
  stock?: number;
  category?: ProductCategory;
  asset?: ProductAsset[];
  attributes?: { key: string; label: string; value: string }[];
}

export interface ProductListResponse {
  statusCode: number;
  data: {
    total: number;
    products: ApiProduct[];
  };
}

export interface ProductDetailResponse {
  statusCode: number;
  data: ApiProduct;
}
