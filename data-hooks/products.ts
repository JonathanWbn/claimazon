import { ProductsApiResponse } from '../pages/api/products'
import { useFetch } from './fetch'

type ProductResponse = {
  products?: Client.Product[]
  isLoading: boolean
}

export function useProducts(): ProductResponse {
  const { data, isLoading } = useFetch<ProductsApiResponse>('/api/products')

  return {
    isLoading,
    products: data ? parseProductsApiResponse(data) : null,
  }
}

function parseProductsApiResponse(data: ProductsApiResponse): Client.Product[] {
  return data.products.product.map(parseProduct)
}

function parseProduct(product: API.Product): Client.Product {
  return {
    ...product,
    itemsInStock:
      typeof product.itemsInStock === 'string'
        ? parseInt(product.itemsInStock)
        : product.itemsInStock,
  }
}
