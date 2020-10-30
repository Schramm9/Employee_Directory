import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Employees from "./components/Employees";
import FilterBtn from "./components/filterBtn";

function App(props) {
  const [filter, setFilter] = useState("All");
  const [people, setPeople] = useState([]);
  const FILTER_MAP = {
    All: () => true,
    Female: (employee) => employee.gender === "female",
    Male: (employee) => employee.gender === "male",
  };
  const FILTER_NAMES = Object.keys(FILTER_MAP);
  useEffect(() => {
    // call setPeople from results of axios
    const apiUrl = "https://randomuser.me/api/?results=50";
    axios.get(apiUrl).then((repos) => setPeople(repos.data.results));
  }, []); // use
  const filterList = FILTER_NAMES.map((name) => (
    <FilterBtn
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  return (
    <div className="employeedirectoryapp stack-large">
      <h1>{filter}</h1>

      <div className="filters btn-group stack-exception">{filterList}</div>
      <Employees employees={people} filter={FILTER_MAP[filter]}></Employees>
    </div>
  );
}

export default App;
