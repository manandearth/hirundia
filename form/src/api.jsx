import * as axios from "axios";

const postFormUrl = `${window.location.origin}/form`;

const postDataToApi = async (url, params) => {
  const result = await axios({
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    url: url,
    data: params
  });
  return result();
};

export { postDataToApi, postFormUrl };
