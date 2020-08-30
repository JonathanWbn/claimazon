declare namespace API {
  export interface Tag {
    id: string
    name: string
  }

  export interface Review {
    id: string
    message: string | null
    rating: number
  }

  export interface Product {
    sku: string
    author: string
    title: string
    description: string
    thumbnail: string
    image: string
    price: number
    currency: string
    itemsInStock: string | number
    rating: number | null
    tags: Tag[]
    reviews: Review[]
    recommendations: string[]
  }
}
