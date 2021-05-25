// 实现一个二分查找
function binarySearch(key: number, arr: Array<number>): number {
  let start: number = 0;
  let end: number = arr.length - 1;
  arr = arr.sort();
  while(start <= end) {
    const mid: number = start + Math.floor((end - start)/2);
    if (key > arr[mid]) {
      start = mid + 1;
    } else if (key < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

module.exports = binarySearch;