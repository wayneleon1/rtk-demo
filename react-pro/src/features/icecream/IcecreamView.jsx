import React from "react";
import { useSelector } from "react-redux";
const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  return (
    <div>
      <h2>Number of Ice creams - {numOfIcecream}</h2>
      <button>Order Ice cream</button>
      <button>Restock Icecreams</button>
    </div>
  );
};

export default IcecreamView;
