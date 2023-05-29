import React from "react";
/* React.memo Stops rerendering if there are no changes to props or state*/
const Title = (props) => {
  console.log("Title Rendered");
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
};

export default React.memo(Title);
