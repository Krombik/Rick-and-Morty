const _sortAndCombineArrayBy = <A extends {}, O extends {}>(
  arr: A[],
  orderArr: O[],
  filter: (arrItem: A, orderItem: O) => boolean,
  sortedArr: (A & O)[] = []
): (A & O)[] => {
  const orderItem = orderArr[0];

  const index = arr.findIndex((arrItem) => filter(arrItem, orderItem));

  if (index > -1) {
    const newSortedArr = [...sortedArr, { ...arr[index], ...orderItem }];

    if (orderArr.length > 1)
      return _sortAndCombineArrayBy(
        [...arr.slice(0, index), ...arr.slice(index + 1)],
        orderArr.slice(1),
        filter,
        newSortedArr
      );

    return newSortedArr;
  }

  return sortedArr;
};

const sortAndCombineArrayBy = <A extends {}, O extends {}>(
  arr: A[],
  orderArr: O[],
  filter: (arrItem: A, orderItem: O) => boolean
) => {
  if (arr.length > 0 && orderArr.length > 0)
    return _sortAndCombineArrayBy(arr, orderArr, filter);

  return [];
};

export default sortAndCombineArrayBy;
