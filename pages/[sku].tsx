import { useRouter } from 'next/router'

import ProductDetails from '../components/product-details'
import ProductList from '../components/product-list'
import ReviewList from '../components/review-list'
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

  const suggestedProducts = product.recommendations
    .map((productSku) => products.find((product) => product.sku === productSku))
    .filter(Boolean)

  return (
    <>
      <ProductDetails product={product}></ProductDetails>
      {suggestedProducts.length > 0 && (
        <>
          <h1>Other people also claimed</h1>
          <ProductList products={suggestedProducts} />
        </>
      )}
      {product.reviews.length > 0 && (
        <>
          <h1>Reviews</h1>
          <ReviewList reviews={product.reviews} />
        </>
      )}
    </>
  )
}
