import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './HomePage/context/CartContext'; 
import { CommentsProvider } from './HomePage/context/CommentsContext'
import { SearchProductProvider} from './HomePage/context/ProdectsSerch'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchProductProvider> 
    <CommentsProvider>
    <CartProvider>
      <App />
    </CartProvider>
     </CommentsProvider>
     </SearchProductProvider>
  </React.StrictMode>
);