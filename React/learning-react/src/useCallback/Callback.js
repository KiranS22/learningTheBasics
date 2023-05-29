import React from "react";
import Title from "./Title";
import Features from "./Features";
import Text from "./Text";
import Button from "./Button";
import { useState, useCallback } from "react";
// Wheneever a component gets rerendered all of it's functions get recreated. Therefore, the props change. Therefore all the components that have them as props will re-erender
// To aviod this, we use useCallback
/* the function body gets passed to useCallback and then a dependancy array is created. Tjis means that the function will only get recreated when the dependancy changes. Whereas previously, the functions were getting recreated each time the parent component renders*/
const Callback = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(50);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  console.log("Callback Rendered");
  return (
    <div>
      <Title title={"useCallback Title"} />
      <Features />
      <Text data={count} name="Count" />
      <Button handleClick={incrementCount} name="Increment Count" />

      <Text data={age} name="age" />
      <Button handleClick={incrementAge} name="Increment Age" />
    </div>
  );
};

export default Callback;
