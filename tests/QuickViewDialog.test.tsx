import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import QuickViewDialog from '@/components/QuickViewDialog'

// Mock the Dialog component from shadcn/ui
jest.mock('@/components/ui/dialog', () => ({
  Dialog: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogTrigger: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  DialogContent: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

const mockProduct = {
  id: 1,
  name: "Classic Denim Jacket",
  price: 89.99,
  image: "/images/denim-jacket.jpg",
  category: "Men"
}

describe('QuickViewDialog', () => {
  it('renders quick view button', () => {
    render(<QuickViewDialog product={mockProduct} />)
    
    expect(screen.getByText('Quick View')).toBeInTheDocument()
  })

  it('displays product information when quick view button is clicked', () => {
    render(<QuickViewDialog product={mockProduct} />)
    
    // Click the Quick View button
    fireEvent.click(screen.getByText('Quick View'))

    // Check if product details are displayed
    expect(screen.getByText(mockProduct.name)).toBeInTheDocument()
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeInTheDocument()
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument()
    expect(screen.getByAltText(mockProduct.name)).toBeInTheDocument()
  })

  it('renders size options', () => {
    render(<QuickViewDialog product={mockProduct} />)
    
    fireEvent.click(screen.getByText('Quick View'))

    // Check if size options are displayed
    expect(screen.getByText('Size')).toBeInTheDocument()
    expect(screen.getByText('S')).toBeInTheDocument()
    expect(screen.getByText('M')).toBeInTheDocument()
    expect(screen.getByText('L')).toBeInTheDocument()
    expect(screen.getByText('XL')).toBeInTheDocument()
  })

  it('renders quantity controls', () => {
    render(<QuickViewDialog product={mockProduct} />)
    
    fireEvent.click(screen.getByText('Quick View'))

    // Check if quantity controls are displayed
    expect(screen.getByText('Quantity')).toBeInTheDocument()
    expect(screen.getByText('-')).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('+')).toBeInTheDocument()
  })

  it('renders add to cart button', () => {
    render(<QuickViewDialog product={mockProduct} />)
    
    fireEvent.click(screen.getByText('Quick View'))

    expect(screen.getByText('Add to Cart')).toBeInTheDocument()
  })
})
