import sendRequest from "@commons/sendRequest";
import { getBaseRequestBody } from "@/api/modules/apiUtil";

export const getMapData = (globalType, type, regionName) => {
  return sendRequest({
    url: "/ds/api/shopDetails/queryRegionDistribution",
    data: {
      indicatorsType: type,
      province: regionName,
      type: globalType
    }
  });
};

export const getTop10 = (globalType, type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.type = globalType;
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/shopDetails/queryTop10",
    data
  });
};

export const getBottom10 = (globalType, type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.type = globalType;
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/shopDetails/queryBottom10",
    data
  });
};

export const getDetailList = (globalType, type, regionName) => {
  let data = getBaseRequestBody(regionName);
  data.type = globalType;
  data.indicatorsType = type;

  return sendRequest({
    url: "/ds/api/shopDetails/queryshopList",
    data
  });
};
