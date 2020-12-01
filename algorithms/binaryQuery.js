  /**
   *二分查找的步骤：
   *先选中序列的中间值
   *如果中间值和待查找值相同就直接返回
   *如果待查找值大于中间值就在右边的序列查找
   *如果待查找值小于中间值就在左边的序列查找
   * 
   *二分查找的序列必须是已经排好序的
   *时间复杂度分析：
   *设序列的长度为 n, 每次查找之后长度减半，
   *所以第一次减半的序列长度为 n/2，第二次减
   *半的序列长度是 (n/2)/2, 第 k 次 减半的序
   *列长度为 n / (2^k),最坏的情况序列的长度为1
   *所以 由 n / (2^k) = 1 知道 k = log2(N)。
   */

  /**
   * 二分查找的代码实现
   * @param {*} array 被查找的数组（已经排序的升序数组）
   * @param {*} value 被查找的数值
   */
const binaryQuery = (array, value) => {
  // 数组的下标
  let left = 0,
    right = array.length - 1,
    mid;
  
  while (left <= right) { // 如果 left > right就无法形成封闭的区间
    mid = Math.floor((left + right) / 2);
    if (array[mid] === value) { // 找到了
      return mid;
    } else if (array[mid] > value) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return - 1;
}
