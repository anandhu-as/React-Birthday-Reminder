import React, { useState } from "react";
import "./App.css";
import List from "./List";
import data from "./data";
const App = () => {
  const [person, setperson] = useState(data);
  const clearFn = () => setperson([]);
  return (
    <main>
      <section className="container">
        <h3>{person.length} birthdays today</h3>
        <List people={person} />
        <button onClick={clearFn}>Clear</button>
      </section>
    </main>
  );
};
export default App;
