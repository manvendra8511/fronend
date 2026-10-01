import React from "react";
export default function CartDrawer({ open, cart, onClose, onChangeQuantity }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {open && <div className="drawer-backdrop" onClick={onClose} />}
      <aside className={`cart-drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <h2>Your Cart</h2>
          <button onClick={onClose}>×</button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div>♧</div>
            <p>Your cart is empty.</p>
            <span>Humanity has survived worse shopping carts.</span>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{item.name}</h3>
                    <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                    <div className="quantity">
                      <button onClick={() => onChangeQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onChangeQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <span>Subtotal</span>
              <strong>₹{total.toLocaleString("en-IN")}</strong>
            </div>
            <button className="checkout-button">CHECKOUT</button>
          </>
        )}
      </aside>
    </>
  );
}