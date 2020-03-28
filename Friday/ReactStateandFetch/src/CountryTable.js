import React from "react";

let CountryTable = ({ labels, countries }) => {
  let updateHeaders = () => {
    return labels.map(label => {
      return <th key={label}>{label}</th>;
    });
  };

  let isArray = array => {
    if (array.length > 1) {
      return <>(+{array.length - 1})</>;
    } else {
      return <></>;
    }
  };

  let updateBody = () => {
    return countries.map(c => {
      return (
        <tr key={c.name}>
          <td>{c.name}</td>
          <td>{c.capital}</td>
          <td>{c.region}</td>
          <td>{c.population}</td>
          <td>{c.area}</td>
          <td>
            {c.timezones[0]} {isArray(c.timezones)}
          </td>
          <td>
            {c.borders[0]} {isArray(c.borders)}
          </td>
          <td>
            {c.topLevelDomain[0]} {isArray(c.topLevelDomain)}
          </td>
          <td>
            {c.currencies[0]} {isArray(c.currencies)}
          </td>
          <td>
            {c.languages[0]} {isArray(c.languages)}
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{updateHeaders()}</tr>
        </thead>
        <tbody>
          <tr>{updateBody}</tr>
        </tbody>
      </table>
    </div>
  );
};

export default CountryTable;
