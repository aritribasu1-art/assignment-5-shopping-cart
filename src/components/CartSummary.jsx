function CartSummary({
  subtotal,
  discount,
  gst,
  grandTotal,
  coupon,
  setCoupon,
  applyCoupon,
  couponMessage,
}) {
  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>

      <div className="coupon-section">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
        />

        <button onClick={applyCoupon}>Apply Coupon</button>
      </div>

      {couponMessage && (
        <p className="coupon-message">{couponMessage}</p>
      )}

      <div className="summary-details">
        <p>
          <span>Subtotal:</span>
          <strong>₹{subtotal.toFixed(2)}</strong>
        </p>

        <p>
          <span>Discount:</span>
          <strong>- ₹{discount.toFixed(2)}</strong>
        </p>

        <p>
          <span>GST (18%):</span>
          <strong>₹{gst.toFixed(2)}</strong>
        </p>

        <hr />

        <p className="grand-total">
          <span>Grand Total:</span>
          <strong>₹{grandTotal.toFixed(2)}</strong>
        </p>
      </div>
    </div>
  );
}

export default CartSummary;