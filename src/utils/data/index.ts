/**
 * 比较两个数值，输出不同部份
 * @param oldData
 * @param newData
 */
export function extractDiff(oldData: Object, newData: Object) {
  // 先决条件
  if (!oldData || !newData) return {};
  if (!Object.keys(newData).length) return {};
  if (!Object.keys(oldData).length) return newData;
  // 寻找不同
  const _diff = {};
  Object.keys(newData).forEach((key) => {
    if (oldData[key] !== newData[key]) {
      _diff[key] = newData[key];
    }
  });
  return _diff;
}
