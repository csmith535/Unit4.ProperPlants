import CartItem from "./CartItem";

export default function CartTotal({ items, addCart, removeCart }) {
  return (
    <>
      <h2 className="c-head">Cart</h2>
      {items.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some plants! 🌱</p>
      ) : (
        items.map((plant) => (
          <CartItem
            key={plant.id}
            plant={plant}
            addCart={addCart}
            removeCart={removeCart}
          />
        ))
      )}
    </>
  );
}
