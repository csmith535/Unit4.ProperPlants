import { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

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

  function removeCart(plantToRemove) {}

  return <></>;
}
