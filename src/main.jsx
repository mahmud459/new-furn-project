import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CartProvider } from './HomePage/context/CartContext'; 
import { CommentsProvider } from './HomePage/context/CommentsContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CommentsProvider>
    <CartProvider>
      <App />
    </CartProvider>
     </CommentsProvider>
  </React.StrictMode>
);