type Props = {
  product: Client.Product
}

export default function ProductDetails({ product }: Props): React.ReactElement {
  return (
    <>
      <h1>{product.title}</h1>
      <div>{product.description}</div>
      <div>Rating: {product.rating}</div>
    </>
  )
}
