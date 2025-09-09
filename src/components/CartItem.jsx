export default function CartItem({ plant, addCart, removeCart }) {
  return (
    <div className="cart-item">
      <h4>
        {plant.image} {plant.name}
      </h4>
      <button onClick={() => addCart(plant)}>+</button>
      <button onClick={() => removeCart(plant)}>-</button>
    </div>
  );
}
