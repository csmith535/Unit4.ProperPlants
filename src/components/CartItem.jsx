export default function CartItem({ plant, addCart, removeCart }) {
  return (
    <div className="cart-item">
      <h4>{plant.image}</h4>
      <p>
        {plant.name}: {plant.quantity}
      </p>
      <button onClick={() => addCart(plant)}>+</button>
      <button onClick={() => removeCart(plant)}>-</button>
    </div>
  );
}
