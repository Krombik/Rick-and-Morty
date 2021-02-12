const _filterArrayBy = <A extends {}, O extends {}>(
  arr: A[],
  filterArr: O[],
  filter: (arrItem: A, filterItem: O) => boolean
): A[] => {
  const index = arr.findIndex((arrItem) => filter(arrItem, filterArr[0]));

  if (index > -1) {
    const filteredArr = [...arr.slice(0, index), ...arr.slice(index + 1)];

    if (filterArr.length > 1)
      return _filterArrayBy(filteredArr, filterArr.slice(1), filter);

    return filteredArr;
  }

  return arr;
};

const filterArrayBy = <A extends {}, O extends {}>(
  arr: A[],
  filterArr: O[],
  filter: (arrItem: A, filterItem: O) => boolean
) => {
  if (arr.length > 0 && filterArr.length > 0)
    return _filterArrayBy(arr, filterArr, filter);

  return arr;
};

export default filterArrayBy;
