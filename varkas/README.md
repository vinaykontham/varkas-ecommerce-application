# Varkas E-commerce Application

A modern e-commerce application built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI components.

## Features

- Modern, responsive design with Tailwind CSS
- Product catalog with categories
- Product details with Quick View functionality
- Search functionality
- User authentication (login/register)
- Newsletter subscription
- SEO optimized

## Tech Stack

- **Framework:** Next.js with TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **Testing:** Jest, React Testing Library, Cypress
- **State Management:** React Hooks

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── products/         
│   │   └── [id]/         # Product details page
│   ├── search/           # Search page
│   ├── login/            # Login page
│   └── register/         # Registration page
├── components/            # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProductCard.tsx
│   ├── NewsletterForm.tsx
│   └── QuickViewDialog.tsx
└── tests/                # Test files
    └── ProductCard.test.tsx
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

### Unit Tests

Run unit tests with Jest:
```bash
npm test
```

### End-to-End Tests

Run Cypress tests:
```bash
npm run cypress
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
