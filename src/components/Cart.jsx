function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) {
  return (
    <div className="cart-section">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price} × {item.quantity}</p>
              </div>

              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>
                  −
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <p className="item-total">
                ₹{item.price * item.quantity}
              </p>

              <button
                className="remove-button"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;