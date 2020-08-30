import { useRouter } from 'next/router'

import ProductDetails from '../components/product-details'
import { useProducts } from '../data-hooks/products'

export default function ProductDetailPage(): React.ReactElement {
  const { products, isLoading } = useProducts()
  const router = useRouter()
  const { sku } = router.query

  if (isLoading) return <h1>Loading...</h1>

  const product = products.find((product) => product.sku === sku)

  return <ProductDetails product={product}></ProductDetails>
}
