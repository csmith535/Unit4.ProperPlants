import { useState } from "react";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState([]);

  function addCart(plant) {
    const plantExists = cart.find((i) => i.id === plant.id);

    if (plantExists) {
      setCart();
    } else {
      const item = { ...plant, quantity: 1 };
      setCart([...cart, item]);
    }
  }

  return <></>;
}
