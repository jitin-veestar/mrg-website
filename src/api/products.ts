import type {
  ProductDetailResponse,
  ProductListResponse,
} from "../types/product";

const API_BASE = "https://product-catalogue-api-ivvhc.ondigitalocean.app/api/v1";
const COMPANY_ID = "65f1b4923c48de0d7a0d3a6f";

export async function fetchProductList(
  page = 0,
  limit = 50
): Promise<ProductListResponse> {
  const res = await fetch(`${API_BASE}/product/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-company-id": COMPANY_ID,
    },
    body: JSON.stringify({ page, limit }),
  });

  if (!res.ok) {
    throw new Error(`Product list failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<ProductListResponse>;
}

export async function fetchProductDetail(
  id: string
): Promise<ProductDetailResponse> {
  const res = await fetch(`${API_BASE}/product/${id}`, {
    headers: {
      "x-company-id": COMPANY_ID,
    },
  });

  if (!res.ok) {
    throw new Error(`Product detail failed: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<ProductDetailResponse>;
}
