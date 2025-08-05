# ShopCo - Modern Shopping App

A modern, responsive shopping application built with React, TypeScript, and Tailwind CSS. This app provides a seamless shopping experience with features like product browsing, cart management, and category filtering.

## Features

- 🛍️ **Product Catalog**: Browse through a variety of products with detailed information
- 🔍 **Search Functionality**: Search products by name or description
- 📱 **Category Filtering**: Filter products by categories (Electronics, Clothing, Books, etc.)
- 🛒 **Shopping Cart**: Add, remove, and manage items in your cart
- ⭐ **Product Ratings**: View product ratings and reviews
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern UI**: Clean and intuitive user interface with smooth animations

## Technologies Used

- **React 18** - Frontend framework
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Lucide React** - Beautiful icons
- **React Context API** - State management for cart functionality

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd shopping-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be generated in the `build` directory.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header with search and cart
│   ├── ProductCard.tsx # Individual product display card
│   ├── Cart.tsx        # Shopping cart sidebar
│   └── CategoryFilter.tsx # Category filtering component
├── context/            # React Context for state management
│   └── CartContext.tsx # Cart state and actions
├── data/               # Sample data and mock API
│   └── sampleData.ts   # Product and category data
├── types/              # TypeScript type definitions
│   └── index.ts        # Interface definitions
├── App.tsx             # Main application component
├── App.css             # Custom styles
└── index.tsx           # Application entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Features in Detail

### Product Management
- Display products with images, descriptions, prices, and ratings
- Stock status indication
- Category-based organization

### Shopping Cart
- Add products to cart with quantity management
- Remove individual items or clear entire cart
- Real-time total calculation
- Persistent cart state during session

### Search and Filtering
- Real-time search across product names and descriptions
- Category-based filtering
- Combined search and filter functionality

### Responsive Design
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface

## Customization

### Adding New Products
Edit the `src/data/sampleData.ts` file to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  description: 'Product description',
  price: 99.99,
  image: 'image-url',
  category: 'Category Name',
  inStock: true,
  rating: 4.5,
}
```

### Adding New Categories
Add new categories in the same file:

```typescript
{
  id: 'unique-id',
  name: 'Category Name',
  icon: '🎯'
}
```

### Styling
The app uses Tailwind CSS for styling. You can customize the design by:
- Modifying the `tailwind.config.js` file for theme customization
- Adding custom CSS in `src/App.css`
- Updating component classes for different styling

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help with the project, please open an issue in the repository.

---

Built with ❤️ using React and TypeScript
