import React, { useState } from "react";
type EventProps = {
  style: React.CSSProperties;
};

const Events = (props: EventProps) => {
  //types
  type stateType = number;

  //States
  const [count, setCount] = useState<stateType>();

  // React.SyntheticEvent
  //React.MouseEvent<HTMLButtonElement>
  const clickHandler = (e: React.SyntheticEvent) => {
    console.log("Helloo");
    setCount(count + 1);
  };
  const dec = (e: React.SyntheticEvent) => setCount(count - 1);
  const plus5 = (e: React.SyntheticEvent) => setCount(count + 5);
  const minus5 = (e: React.SyntheticEvent) => setCount(count - 5);

  return (
    <div>
      Count - {count}
      <button style={props.style} onClick={(e) => clickHandler(e)}>
        Increment
      </button>
      <button onClick={(e) => dec(e)}>Decrement</button>
      <button onClick={(e) => plus5(e)}>+5</button>
      <button onClick={(e) => minus5(e)}>-5</button>
    </div>
  );
};

export default Events;
