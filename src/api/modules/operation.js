import sendRequest from "@commons/sendRequest";
import { getBaseRequestBody } from "@/api/modules/apiUtil";

export const getMapData = (globalType, type, regionName) => {
  return sendRequest({
    url: "/ds/api/management/queryRegionDistribution",
    data: {
      indicatorsType: type,
      province: regionName,
      type: globalType
    }
  });
};

export const getKpiData = (globalType, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.type = globalType;

  return sendRequest({
    url: "/ds/api/management/queryIndicatorsStatistic",
    data
  });
};

export const getTrendData = (globalType, type, regionName) => {
  let data = getBaseRequestBody(regionName);
  Object.assign(data, {
    indicatorsType: type,
    type: globalType
  });

  return sendRequest({
    url: "/ds/api/management/queryTrend",
    data
  });
};

export const getItemsDetail = (globalType, type, regionName) => {
  let data = getBaseRequestBody(regionName);
  Object.assign(data, {
    indicatorsType: type,
    type: globalType
  });

  return sendRequest({
    url: "/ds/api/management/queryOnlineTypeStatistic",
    data
  });
};
