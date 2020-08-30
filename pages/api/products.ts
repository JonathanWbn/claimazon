import { NextApiRequest, NextApiResponse } from 'next'

import { fetchProducts } from '../../database'

export type ProductsApiResponse = {
  products: {
    product: API.Product[]
  }
}

async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<ProductsApiResponse>
): Promise<void> {
  try {
    const products = await fetchProducts()

    res.statusCode = 200
    res.json({ products: { product: products } })
  } catch (err) {
    res.statusCode = 400
    res.send(err.message)
  }
}

export default handler
