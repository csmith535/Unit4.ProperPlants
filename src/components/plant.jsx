export default function Plant({ plant, addCart }) {
  return (
    <div>
      <h1>{plant.image}</h1>
      <b>{plant.name}</b>{" "}
      <button onClick={() => addCart(plant)}>Add to Cart</button>
    </div>
  );
}
