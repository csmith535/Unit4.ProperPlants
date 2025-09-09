import { useState } from "react";
import "./App.css";
import Plants from "./components/Plants.jsx";
import PLANTS from "./data";

export default function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  function addCart(plant) {
    const plantExists = cart.find((i) => i.id === plant.id);

    if (plantExists) {
      setCart(
        cart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  }

  function removeCart(plantToRemove) {
    const plantExists = cart.find((i) => i.id === plantToRemove.id);

    if (plantExists) {
      setCart(
        cart
          .map((item) =>
            item.id === plantToRemove.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0)
      );
    }
  }

  return (
    <>
      <Plants plants={PLANTS} addCart={addCart} />
    </>
  );
}
