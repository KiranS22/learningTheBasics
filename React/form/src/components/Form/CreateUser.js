import React, { useState } from "react";
import ShowUser from "../showUser/ShowUser";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    setUsers([newUser]);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>

      {console.log("users before passing as props", users)}
      <ShowUser users={users || []} />
    </div>
  );
};

export default CreateUser;
