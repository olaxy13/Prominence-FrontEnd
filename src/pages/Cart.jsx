import { useCart } from "../services/CartContext";
import { useNavigate } from "react-router";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // Function to handle WhatsApp checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const message = cartItems
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.name}\n   Qty: ${item.qty}\n   Price: ₦${
            item.price
          }\n   Desc: ${item.desc}`
      )
      .join("\n\n");
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
    const fullMessage = `Hello, I want to order the following items:%0A%0A${encodeURIComponent(
      message
    )}%0A%0ATotal: ₦${total}`;
    const whatsappUrl = `https://wa.me/?text=${fullMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="p-4">
      <button
        className="mb-4 bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 font-semibold shadow"
        onClick={() => navigate("/")}
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is currently empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="border border-gray-300 p-4 rounded flex items-center gap-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-bold">{item.name}</h2>
                  <p>
                    ₦{item.price} x {item.qty}
                  </p>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
                <button
                  className="ml-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 font-semibold shadow"
            onClick={handleCheckout}
          >
            Checkout via WhatsApp
          </button>
        </>
      )}
    </div>
  );
}
