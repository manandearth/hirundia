import axios from "axios";

function getDataFromApi(destinationUrl) {
  const getData = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: destinationUrl,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        // rejectUnauthorized: false,
        // withCredentials: true
      });
      return result;
    } catch (error) {
      return error;
    }
  };
  return getData();
}

const getTransitData = async () => {
  const url = "/transit";
  return new Promise(resolve => {
    const response = getDataFromApi(url);
    resolve(response);
  });
};

export {getTransitData};

