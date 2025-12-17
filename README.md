# Novacrust - Crypto Converter

A modern cryptocurrency converter application built for the Novacrust assessment. Converts cryptocurrency to cash with support for multiple cryptocurrencies and wallet providers.

## Features

- **Multi-Step Crypto to Cash Flow**: Complete conversion process with guided steps
  - Amount selection with crypto/currency dropdowns
  - Bank account details collection
  - Contact information (email & phone with country codes)
  - Crypto transfer instructions with copy functionality
  - Transaction success confirmation
- **Multiple Wallet Support**: Integration with MetaMask, Rainbow, WalletConnect, and other crypto wallets
- **Multi-Network USDT**: Support for USDT on BNB Chain, Celo, and TON networks
- **Copy to Clipboard**: One-click copy for wallet addresses, amounts, and transaction IDs with visual feedback
- **Toast Notifications**: User-friendly feedback with Sonner toast library
- **Modern UI**: Built with Radix UI components and Tailwind CSS v4
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Input Sanitization**: Number-only inputs for account numbers and phone numbers
- **Responsive Design**: Mobile-first approach with custom styling

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **Runtime**: React 19.2.1
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives (shadcn/ui)
- **Form Management**: React Hook Form with Zod validation
- **Notifications**: Sonner (toast library)
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
│   │   └── converter/       # Converter feature (modular structure)
│   │       ├── crypto-to-cash/
│   │       │   ├── index.tsx      # Crypto to cash flow logic
│   │       │   └── schema.ts      # Flow-specific validation schemas
│   │       ├── BankDetails.tsx    # Reusable bank account form
│   │       ├── ContactForm.tsx    # Reusable contact info form
│   │       ├── SendCrypto.tsx     # Crypto transfer instructions
│   │       ├── TransactionSuccess.tsx  # Success confirmation screen
│   │       ├── SetAmount.tsx      # Amount input with crypto/currency selection
│   │       ├── SelectOption.tsx   # Generic option selector
│   │       ├── schemas.ts         # Shared validation schemas
│   │       └── index.tsx          # Main converter dialog with tabs
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with toast provider
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # Reusable UI components (shadcn/ui)
│   └── ComingSoon.tsx       # Placeholder component
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets (icons, SVGs)
└── package.json
```

## Key Components

### Flow Components

- **Converter** (`converter/index.tsx`): Main dialog with tabbed interface and tab visibility control
  - Crypto to Cash (✓ implemented)
  - Cash to Crypto (coming soon)
  - Crypto to Fiat Loan (coming soon)

- **CryptoToCash** (`crypto-to-cash/index.tsx`): Complete multi-step conversion flow
  1. Amount selection with crypto/currency options
  2. Bank account details (BankDetails component)
  3. Contact information (ContactForm component)
  4. Crypto transfer instructions (SendCrypto component)
  5. Transaction success confirmation (TransactionSuccess component)

### Reusable Components

- **BankDetails**: Generic bank account form with dropdown for bank selection and validated account number input
- **ContactForm**: Contact information form with email validation and phone number with country code selector
- **SendCrypto**: Displays wallet address, amount, network info with copy-to-clipboard functionality
- **TransactionSuccess**: Success screen with transaction ID and "Go back to home" action
- **SetAmount**: Amount input with crypto/currency dropdown and search functionality
- **SelectOption**: Generic option selector component

### Component Organization

The converter feature uses a modular structure where:
- **Flow-specific logic** lives in dedicated directories (`crypto-to-cash/`)
- **Reusable components** are shared at the converter level
- **Shared validation schemas** are centralized in `schemas.ts`
- This structure enables easy addition of new flows (cash-to-crypto, crypto-to-fiat-loan) while maintaining DRY principles

### Trade-offs

1. **UI Library Choice**:
   - **Chosen**: Radix UI + shadcn/ui
   - **Reasoning**: Unstyled, accessible primitives with full design control

2. **Tailwind CSS v4**:
   - **Chosen**: Latest version with CSS-first configuration
   - **Benefit**: Modern approach, better performance
   - **Trade-off**: Newer syntax, smaller ecosystem compared to v3

3. **Form Validation**:
   - **Chosen**: React Hook Form + Zod
   - **Reasoning**: TypeScript-first, excellent DX, performance

4. **Component Organization**:
   - **Chosen**: Feature-based (converter/) with shared UI components
   - **Reasoning**: Scalable for larger applications
   - **Alternative**: Flat structure (simpler but less maintainable)

5. **Styling Approach**:
   - **Chosen**: Tailwind utility classes with custom CSS variables
   - **Reasoning**: Rapid development, consistent design system
   - **Trade-off**: Learning curve, potential class name verbosity

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
