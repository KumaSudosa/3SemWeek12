import React from "react";
import "./App.css";
import person, { males, females } from "./file2";

let { firstName, email } = person;

let personV2 = {
  email: person.email,
  firstName: person.firstName,
  friends: [...males, ...females],
  gender: person.gender,
  lastName: person.lastName,
  phone: "21785912"
};

function App() {
  console.log(...males, ...females);
  console.log(...males, "Kurt", "Helle", ...females, "Tina");
  console.log(personV2);

  return (
    <div className="App">
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  );
}
export default App;
