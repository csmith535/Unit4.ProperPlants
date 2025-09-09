export default function CartItem({ plant, addCart, removeCart }) {
  return (
    <div>
      <h3>
        {plant.image} {plant.name}
      </h3>
      <button onClick={() => addCart(plant)}>+</button>
      <button onClick={() => removeCart(plant)}>-</button>
    </div>
  );
}
