import Link from 'next/link'

import { useProducts } from '../data-hooks/products'

export default function ProductList(): React.ReactElement {
  const { products, isLoading } = useProducts()

  if (isLoading) return <p>Loading...</p>

  return (
    <ul>
      {products.map((product) => (
        <li key={product.sku}>
          <Link as={`/${product.sku}`} href="/[sku]">
            <a>{product.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
