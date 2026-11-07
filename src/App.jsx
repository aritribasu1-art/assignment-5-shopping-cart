import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartSummary from "./components/CartSummary";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 1499,
    },
    {
      id: 4,
      name: "Laptop Backpack",
      price: 999,
    },
    {
      id: 5,
      name: "USB-C Charger",
      price: 799,
    },
  ];

  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const applyCoupon = () => {
    if (coupon.toUpperCase() === "SAVE10") {
      setDiscount(subtotal * 0.1);
      setCouponMessage("Coupon applied! 10% discount.");
    } else {
      setDiscount(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const gst = (subtotal - discount) * 0.18;

  const grandTotal = subtotal - discount + gst;

  return (
    <div className="app">
      <header>
        <h1>Online Shopping Cart</h1>
        <p>Shop your favorite products</p>
      </header>

      <main>
        <ProductList
          products={products}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
        />

        <CartSummary
          subtotal={subtotal}
          discount={discount}
          gst={gst}
          grandTotal={grandTotal}
          coupon={coupon}
          setCoupon={setCoupon}
          applyCoupon={applyCoupon}
          couponMessage={couponMessage}
        />
      </main>

      <footer>
        <p>© 2026 Online Shopping Cart</p>
      </footer>
    </div>
  );
}

export default App;