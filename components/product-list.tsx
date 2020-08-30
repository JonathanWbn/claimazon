import { useProducts } from '../data-hooks/products'

export default function ProductList(): React.ReactElement {
  const { products, isLoading } = useProducts()

  if (isLoading) return <p>Loading...</p>

  return (
    <ul>
      {products.map((product) => (
        <li key={product.sku}>{product.title}</li>
      ))}
    </ul>
  )
}
