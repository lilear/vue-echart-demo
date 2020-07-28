import sendRequest from "@commons/sendRequest";
import { getBaseRequestBody } from "./apiUtil";

export const getMapData = (type, regionName) => {
  return sendRequest({
    url: "/ds/api/development/queryRegionDistribution",
    data: {
      indicatorsType: type,
      province: regionName
    }
  });
};

export const getKpiData = regionName => {
  return sendRequest({
    url: "/ds/api/development/queryIndicatorsStatistic",
    data: getBaseRequestBody(regionName)
  });
};

export const getItemRate = (type, regionName) => {
  return sendRequest({
    url: "/ds/api/development/queryProjectTypeStatistic",
    data: getBaseRequestBody(regionName)
  });
};

export const getTrendData = (type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/development/queryTrend",
    data
  });
};

export const getItemsDetail = (type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/development/queryShopTypeStatistic",
    data
  });
};
