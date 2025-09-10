export default function CartItem({ plant, addCart, removeCart }) {
  return (
    <div className="cart-item">
      <p>
        {plant.image} {plant.name}: {plant.quantity}
      </p>
      <button className="minb" onClick={() => removeCart(plant)}>
        -
      </button>
      <button className="addb" onClick={() => addCart(plant)}>
        +
      </button>
    </div>
  );
}
