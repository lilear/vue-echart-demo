import sendRequest from "@commons/sendRequest";
import { getBaseRequestBody } from "@/api/modules/apiUtil";

export const getMapData = (type, regionName) => {
  return sendRequest({
    url: "/ds/api/service/queryRegionDistribution",
    data: {
      indicatorsType: type,
      province: regionName
    }
  });
};

export const getKpiData = regionName => {
  return sendRequest({
    url: "/ds/api/service/queryIndicatorsStatistic",
    data: getBaseRequestBody(regionName)
  });
};

export const getTrendData = (type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/service/queryTrend",
    data
  });
};

export const getItemsDetail = (type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/service/queryOnlineTypeStatistic",
    data
  });
};
