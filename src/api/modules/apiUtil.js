import { getRegionDetail } from "@commons/mapUtils";
import { deleteLast } from "@commons/Utils";

export function getBaseRequestBody(regionName) {
  let { province, city } = getRegionDetail(regionName);

  // 接口中city参数需要不带‘市’的城市名，所以需要将结尾的市移除掉
  city = deleteLast(city, "市");

  return {
    province,
    city
  };
}
