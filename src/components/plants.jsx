import Plant from "./plant";

export default function Plants({ plants, addCart }) {
  return (
    <>
      <h2>Plants</h2>
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} />
      ))}
    </>
  );
}
