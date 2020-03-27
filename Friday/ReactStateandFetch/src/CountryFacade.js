let URL = "http://localhost:3333";

const countryFacade = () => {
  function errorHandling(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res;
  }

  const getLabels = () => {
    const response = fetch(URL + "/labels").then(errorHandling);
    return response;
  };

  const getCountries = () => {
    const response = fetch(URL + "/countries").then(errorHandling);
    return response;
  };

  return {
    getLabels,
    getCountries
  };
};

export default countryFacade();
