import React from 'react';
import { Link } from "react-router-dom";
import styles from '../Home/home.module.css';
import { useCart } from '../context/CartContext'; // ✅ Import cart context

function CardSubmenu({ showCart, onClose  }) {
  const {
    cart,
    addToCart,
    removeFromCart,
    decreaseQuantity,
  } = useCart();

  if (!showCart) return null;

  return (
    <div className={styles.cart_submenu}>
      {/* ✅ Close button */}
      <div className="d-flex justify-content-start p-2">
        <button
          onClick={onClose}
          className="btn btn-sm btn-outline-danger"
          style={{ fontSize: '1.2rem', lineHeight: '1' }}
        >
          &times;
        </button>
      </div>

      {/* Cart items */}
      <div className={styles.cart_wrapper_item}>
        {cart.length === 0 ? (
          <p className="text-center text-muted p-3">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className={styles.wrapper}>
              <div className={styles.wrapper_item}>
                <div className={styles.wrapper_img}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                  />
                </div>

                <div className={styles.wrapper_content}>
                  <h5 className={styles.wrapper_title}>{item.name}</h5>

                  <div className={styles.price}>
                    <p className={styles.new_price}>${item.price}</p>
                  </div>

                  <div className="d-flex align-items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="btn btn-sm btn-outline-secondary px-2"
                    >
                      <span>-</span>
                    </button>
                    <span className="fw-bold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="btn btn-sm btn-outline-secondary px-2"
                    >
                      <span>+</span>
                    </button>
                  </div>
                </div>
              </div>

              <span
                className={styles.close_btn}
                onClick={() => removeFromCart(item.id)}
              >
                <i className={`${styles.remove_icon_style} fa-solid fa-xmark fs-5`}></i>
              </span>
            </div>
          ))
        )}
      </div>

      {/* Subtotal */}
      {cart.length > 0 && (
        <div className={styles.cart_wrapper_section}>
          <div className={styles.wrapper_line}></div>

          <h5 className={styles.wrapper_title}>
            {cart.reduce((acc, item) => acc + item.quantity, 0)} item(s) — $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </h5>

          <div className={styles.cart_btn}>
            <Link
              to="/CartPage"
              className={`${styles.shop_btn} ${styles.view_btn}`}
              onClick={onClose} // 👈 Optional: close cart on navigation
            >
              View Cart
            </Link>
            <Link
              to="/Checkout"
              className={`${styles.shop_btn} ${styles.checkout_btn}`}
              onClick={onClose} // 👈 Optional: close cart on navigation
            >
              Checkout Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardSubmenu;
