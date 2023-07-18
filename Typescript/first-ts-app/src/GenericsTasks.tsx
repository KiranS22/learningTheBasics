import React from "react";

const GenericsTasks = () => {
  type personType<A, B, C> = {
    name: A;
    age: B;
    inRelationship: C;
    hobbies: A[];
  };

  const myPerson: personType<string, number, boolean> = {
    name: "Jon",
    age: 30,
    inRelationship: true,
    hobbies: ["Running", "Reading"],
  };
  type HouseObjectType = {
    address: string;
    city: string;
    postCode: string;
  };
  interface houseInterface<D, E, F, G> {
    isAppartment: D;
    color: E;
    number: F;
    location: G;
  }

  // D: Bool E: string F: number G houseObjectType

  const myHouse: houseInterface<boolean, string, number, HouseObjectType> = {
    isAppartment: true,
    color: "red",
    number: 44,
    location: { address: "123 Lname", city: "London", postCode: "WS3 567" },
  };

  type funcWithGeneric<H, I> = {
    first: H;
    second: I;
  };

  const logObject = <H extends number, I extends number>(
    obj: funcWithGeneric<H, I>
  ) => {
    console.log(obj);
  };

  logObject({ first: 1, second: 4 });

  return <></>;
};

export default GenericsTasks;
