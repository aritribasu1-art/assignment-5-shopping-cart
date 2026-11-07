function ProductList({ products, addToCart }) {
  return (
    <div className="product-section">
      <h2>Products</h2>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              🛍️
            </div>

            <h3>{product.name}</h3>

            <p className="product-price">₹{product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;