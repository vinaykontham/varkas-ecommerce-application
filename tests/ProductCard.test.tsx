import { render, screen } from "@testing-library/react"
import ProductCard from "@/components/ProductCard"

const product = {
  id: 1,
  name: "Classic Denim Jacket",
  price: 89.99,
  image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg",
  category: "Men",
}

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    render(<ProductCard {...product} />)
    expect(screen.getByText(product.name)).toBeInTheDocument()
    expect(screen.getByText(`$${product.price.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(product.category)).toBeInTheDocument()
    const img = screen.getByAltText(product.name)
    expect(img).toHaveAttribute("src", expect.stringContaining("pexels-photo-1040945.jpeg"))
  })
})
