const ul = [[1], [2, 3], [4], [7, 9], [56, 89]];
let result = [];
function flattenArr(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flattenArr(item) : item);
  }, []);
}

const op = flattenArr(ul);
console.log(op);
