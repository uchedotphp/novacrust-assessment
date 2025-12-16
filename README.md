# Novacrust - Crypto Converter

A modern cryptocurrency converter application built for the Novacrust assessment. Converts cryptocurrency to cash with support for multiple cryptocurrencies and wallet providers.

## Features

- **Crypto to Cash Conversion**: Convert ETH and USDT (across multiple networks) to cash
- **Multiple Wallet Support**: Integration with MetaMask, Rainbow, and WalletConnect
- **Multi-Network USDT**: Support for USDT on BNB Chain, Celo, and TON networks
- **Modern UI**: Built with Radix UI components and Tailwind CSS v4
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Responsive Design**: Mobile-first approach with custom styling

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Runtime**: React 19.2.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Form Management**: React Hook Form with Zod validation
- **Icons**: Lucide React, React Icons

## Setup Instructions

### Prerequisites

- Node.js 20.x or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd novacrust
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
novacrust/
├── app/
│   ├── assets/
│   │   └── styles/          # Custom CSS files
│   ├── components/
│   │   └── converter/       # Converter feature components
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   └── ComingSoon.tsx       # Placeholder component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets (icons, images)
└── package.json
```

## Key Components

- **Converter**: Main dialog component with tabbed interface
  - Crypto to Cash (implemented)
  - Cash to Crypto (coming soon)
  - Crypto to Fiat Loan (coming soon)

- **CryptoToCash**: Step-by-step conversion flow
  - Amount selection
  - Cryptocurrency selection (ETH, USDT-BNB, USDT-Celo, USDT-TON)
  - Wallet provider selection (MetaMask, Rainbow, WalletConnect)

## Assumptions & Trade-offs

### Assumptions

1. **No Backend Integration**: The application is currently front-end only. Actual conversion logic, wallet connections, and transaction processing would require backend API integration.

2. **Mock Data**: Cryptocurrency options and wallet providers are hardcoded. In production, these would be fetched from an API.

3. **Conversion Rates**: No real-time price fetching implemented. This would require integration with a cryptocurrency price API (e.g., CoinGecko, CoinMarketCap).

4. **Wallet Connection**: UI shows wallet selection but doesn't implement actual Web3 wallet connections (would require ethers.js, wagmi, or similar).

5. **Form Submission**: The converter dialog opens by default for demonstration purposes. In production, this would be controlled by user interaction.

### Trade-offs

1. **UI Library Choice**:
   - **Chosen**: Radix UI + shadcn/ui
   - **Reasoning**: Unstyled, accessible primitives with full design control
   - **Alternative**: Complete UI libraries like Chakra UI or MUI (faster but less customizable)

2. **Tailwind CSS v4**:
   - **Chosen**: Latest version with CSS-first configuration
   - **Benefit**: Modern approach, better performance
   - **Trade-off**: Newer syntax, smaller ecosystem compared to v3

3. **Next.js App Router**:
   - **Chosen**: App Router (app directory)
   - **Reasoning**: Modern React patterns, better performance
   - **Trade-off**: More complex than Pages Router for simple apps

4. **Form Validation**:
   - **Chosen**: React Hook Form + Zod
   - **Reasoning**: TypeScript-first, excellent DX, performance
   - **Trade-off**: More setup than simple HTML5 validation

5. **Component Organization**:
   - **Chosen**: Feature-based (converter/) with shared UI components
   - **Reasoning**: Scalable for larger applications
   - **Alternative**: Flat structure (simpler but less maintainable)

6. **Styling Approach**:
   - **Chosen**: Tailwind utility classes with custom CSS variables
   - **Reasoning**: Rapid development, consistent design system
   - **Trade-off**: Learning curve, potential class name verbosity

## Future Enhancements

- Implement actual Web3 wallet integration
- Add real-time cryptocurrency price fetching
- Backend API for conversion processing
- Implement "Cash to Crypto" and "Crypto to Fiat Loan" features
- Add transaction history
- User authentication and account management
- Dark mode support (theme infrastructure already in place)
- Multi-language support
- Enhanced error handling and loading states
- Unit and integration tests

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project was created as an assessment for Novacrust.

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)
