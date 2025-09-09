export default function Plant({ plant, addCart }) {
  return (
    <div className="plant-item">
      <h1>{plant.image}</h1>
      <p>{plant.name}</p>
      <button onClick={() => addCart(plant)}>Add to Cart</button>
    </div>
  );
}
