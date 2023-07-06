import React from "react";

// type countProps = {
//   myNum: number;
//   myName: string;
//   myAge?: number;
// };
// interfaces are used commonly when passing props
interface countProps {
  myNum: number;
  myName: string;
  myAge?: number;
  myFunc: (a: number, b: number) => void;
}

interface countProps {
  isPositive?: boolean;
}

const Count = ({ myNum, myName, myFunc }: countProps) => {
  myFunc(10, 20);
  return (
    <div>
      Count - {myNum} - {myName}
    </div>
  );
};

export default Count;
