import Plant from "./Plant";

export default function Plants({ plants, addCart }) {
  return (
    <>
      <h2 className="p-head">Plants</h2>
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} addCart={addCart} />
      ))}
    </>
  );
}
