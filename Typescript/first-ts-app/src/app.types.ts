//types/interfaces
export type myType = string | number | boolean;

export type User = {
  name: string;
  age: number;
  city: string;
  country?: string;
  contact?: string;
  hobbies?: string[];
};

export type UsersArr = User[] | undefined;
