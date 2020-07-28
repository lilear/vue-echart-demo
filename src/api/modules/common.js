import sendRequest from "@commons/sendRequest";

export const getDataValidTime = () => {
  return sendRequest({
    url: "/ds/api/led/queryStatisticDateTime",
    data: {}
  });
};
