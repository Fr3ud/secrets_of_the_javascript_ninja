/**
 * 1. Clearing or truncating an array
 *
 * An easy way of clearing or truncating an array without reassigning it is
 * by changing its length property value:
 */

const arr = [11, 22, 33, 44, 55, 66];

// truncanting
arr.length = 3;
console.log(arr); //=> [11, 22, 33]

// clearing
arr.length = 0;
console.log(arr); //=> []
console.log(arr[2]); //=> undefined

/**
 * 2. Removing duplicate items from an array
 *
 * By using ES2015 Sets along with the Spread operator, you can easily remove
 * duplicate items from an array:
 */

const removeDuplicateItems = arr => [...new Set(arr)];

removeDuplicateItems([42, 'foo', 42, 'foo', true, true]); //=> [42, "foo", true]

/**
* 3. Flattening multidimensional arrays
* Flattening arrays is trivial with Spread operator:
*/

const arr = [11, [22, 33], [44, 55], 66];
const flatArr = [].concat(...arr); //=> [11, 22, 33, 44, 55, 66]

/*
 * Unfortunately, the above trick will only work with bidimensional arrays.
 * But with recursive calls, we can make it suitable for arrays with more
 * than 2 dimensions:
 */

function flattenArray(arr) {
  const flattened = [].concat(...arr);

  return flattened.some(item => Array.isArray(item)) ?
    flattenArray(flattened) : flattened;
}

const arr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr = flattenArray(arr); //=> [11, 22, 33, 44, 55, 66, 77, 88, 99]
