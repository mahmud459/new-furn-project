import React from "react";
import { useCart } from "../../HomePage/context/CartContext";

function CartPageContent() {
  const { cart, addToCart, removeFromCart, decreaseQuantity } = useCart();

  return (
    <div
      className="container py-5"
      style={{
        marginTop: "150px",
      }}
      data-aos="fade-up"
    >
      <h2
        className="text-center"
        style={{
          marginBottom: "100px",
        }}
        data-aos="zoom-in"
      >
        Your Shopping Cart
      </h2>

      {cart.length === 0 ? (
        <p className="text-muted text-center" data-aos="fade-up">
          Your cart is empty.
        </p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="container"
              style={{
                backgroundColor: "#f2e1d9",
              }}
              key={item.id}
              data-aos="fade-up"
            >
              <div
                className="d-flex justify-content-between align-items-center mb-4 mx-auto"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                  data-aos="zoom-in"
                />
                <div
                  className="d-flex flex-column flex-md-row g-5 align-items-center mt-3 mt-md-0 py-2"
                  data-aos="fade-left"
                >
                  <div className="d-flex align-items-center mb-4 mb-md-0 me-5">
                    <h5 className="mb-0 me-2">{item.name}:</h5>
                    <p className="mb-0">${item.price}</p>
                  </div>

                  <div className="d-flex gap-5 align-items-center">
                    <div>
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        -
                      </button>
                      <span className="mx-3">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="btn btn-sm btn-outline-secondary"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-sm btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <hr data-aos="fade-in" />
          <h4 className="text-center" data-aos="zoom-in-up">
            Total: $
            {cart
              .reduce((acc, item) => acc + item.price * item.quantity, 0)
              .toFixed(2)}
          </h4>
        </>
      )}
    </div>
  );
}

export default CartPageContent;
