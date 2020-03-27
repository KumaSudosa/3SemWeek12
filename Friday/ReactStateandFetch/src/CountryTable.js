import React from "react";

const CountryTable = ({ labels, countries }) => {
  const updateHeaders = () => {
    return labels.map(label => {
      return <th key={label}>{label}</th>;
    });
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>{updateHeaders()}</tr>
        </thead>

        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
