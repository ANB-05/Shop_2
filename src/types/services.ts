export interface Iproducts {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: PRating
}

export interface PRating {
  rate: number
  count: number
}