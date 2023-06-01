import React, { useState, useMemo } from "react";

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // Adds delay to running the if statment. If there is a delay, both counter buttond  get delayed.
  // This is because when the component rerenders due to state changes, the Isodd function still gets recreated if any state changes

  // We only want isOdd to recalculate the return vvalue if count1 changes
  // useMemo solves this by caching the value of the function and only allowes the function to recalculate if any dependancy changes

  // const isOdd = useMemo(() => {
  //   let num = 0;
  //   while (num < 500) {
  //     num++;
  //   }
  //   if (count1 % 2 === 0) {
  //     return false;
  //   }
  //   return true;
  // }, [count1]);
  // const inc1 = () => {
  //   setCount1(count1 + 1);
  // };
  // const inc2 = () => {
  //   setCount2(count2 + 1);
  // };
  // isOdd's value is cached until the dependancy value changes, which will mean that count 2 will not expirence the delay
  return (
    <></>
    // <div>
    //   <button onClick={() => inc1()}>INC Count 1:{count1}</button>{" "}
    //   {/* <p>{isOdd ? "Number is odd" : "Number is Even"}</p> */}
    //   <button onClick={() => inc2()}>Inc Count 2: {count2}</button>
    // </div>
  );
};

export default Memo;

/*Memwisation -  useCallback aviods recreation  of functions if there has been no changes to state, props or parent

React.Memo  aviods recreation  of component if there has been no changes to state, props*/
/*useMemo*/
