import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";
import countryFacade from "./countryFacade";

let App = props => {
  let [label, setLabel] = useState([]);
  let [country, setCountry] = useState([]);

  let labelUpdate = () => {
    let newLabel = countryFacade.getLabels().then(data => {
      return data;
    });
    setLabel(newLabel);
  };

  let countryUpdate = () => {
    let newCountry = countryFacade.getCountries().then(data => {
      return data;
    });
    setCountry(newCountry);
  };

  useEffect(() => {
    labelUpdate();
    setInterval(countryUpdate, 3000);
  }, []);

  return (
    <div>
      <div className="App Header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App Body">
        <CountryTable label={label} country={country} />
      </div>
    </div>
  );
};

export default App;
