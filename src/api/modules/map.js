import sendRequest from "@commons/sendRequest";
import config from "@/config";

export const getMapJson = (type, mapCode) => {
  return sendRequest(
    Object.assign({
      method: "get",
      baseURL: window.location.origin + config.options.rootPath,
      url: `/static/map/${type}/${mapCode}.json`
    })
  );
};
