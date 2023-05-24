import React, { useState, useEffect } from "react";

const ShowUser = ({ users }) => {


  return <>
  <h3>First Name:{users.firstName}</h3>
  <h3>Last Name:{users.lastName}</h3>
  <h3>Email: {users.email}</h3>
  </>;
};

export default ShowUser;
