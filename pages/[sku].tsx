import { useRouter } from 'next/router'

import ProductDetails from '../components/product-details'
import Spinner from '../components/spinner'
import { useProducts } from '../data-hooks/products'

export default function ProductDetailPage(): React.ReactElement {
  const { products, isLoading } = useProducts()
  const router = useRouter()
  const { sku } = router.query

  if (isLoading) return <Spinner />
  if (!products) return null

  const product = products.find((product) => product.sku === sku)

  if (!product) return <h1>No product found.</h1>

  return (
    <>
      <ProductDetails product={product}></ProductDetails>
    </>
  )
}
