/**
 * 数字千位符格式化
 * @param num
 * @returns {string}
 */
export function toThousands(num) {
  if (num == null) {
    return "--";
  }

  num += "";
  if (!num.includes(".")) num += ".";
  return num
    .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
      return $1 + ",";
    })
    .replace(/\.$/, "");
}
