import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import NewsletterForm from '@/components/NewsletterForm'

describe('NewsletterForm', () => {
  it('renders newsletter form correctly', () => {
    render(<NewsletterForm />)
    
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('validates email input', async () => {
    render(<NewsletterForm />)
    
    const emailInput = screen.getByPlaceholderText(/email/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    // Test invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
    fireEvent.submit(screen.getByTestId('newsletter-form'))
    
    const errorMessage = await screen.findByText(/please enter a valid email/i)
    expect(errorMessage).toBeInTheDocument()

    // Test valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.submit(screen.getByTestId('newsletter-form'))
    
    // Wait for error message to disappear
    await waitFor(() => {
      expect(screen.queryByText(/please enter a valid email/i)).not.toBeInTheDocument()
    })
  })

  it('handles form submission', async () => {
    const mockSubmit = jest.fn()
    render(<NewsletterForm onSubmit={mockSubmit} />)
    
    const emailInput = screen.getByPlaceholderText(/email/i)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.click(submitButton)

    expect(mockSubmit).toHaveBeenCalledWith('test@example.com')
  })
})
