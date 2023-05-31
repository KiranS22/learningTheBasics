import React, { useState, useEffect } from "react";

const Axios = ({ countries }) => {
  return (
    <div>
      <h3>Country Name:{countries.name.common}</h3>
    </div>
  );
};

export default Axios;
