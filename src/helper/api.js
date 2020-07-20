import CONFIG_CONSTANTS from "../constants/configConstants";

var defaultParams = {};
var defaultHeaders = {
  "Content-Type": "application/json"
};

export const getMethod = async (url, header, params, domainName) => {
  try {
    const apiResponse = await axios({
      method: "get",
      url: domainName ? domainName + url : CONFIG_CONSTANTS.DOMAIN + url,
      params: params ? params : defaultParams,
      headers: header ? header : defaultHeaders
    });
    return apiResponse;
  } catch (error) {
    return error;
  }
};

export const postMethod = async (
  url,
  requestData,
  params,
  header,
  domainName
) => {
  try {
    const apiResponse = await axios({
      method: "post",
      url: domainName ? domainName + url : CONFIG_CONSTANTS.DOMAIN + url,
      data: requestData,
      params: params ? params : defaultParams,
      headers: header ? header : defaultHeaders,
      transformRequest: jsonData => transformRequest(jsonData)
    });
    return apiResponse;
  } catch (error) {
    return error;
  }
};

const transformRequest = (jsonData = {}) =>
  Object.entries(jsonData)
    .map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
    .join("&");
