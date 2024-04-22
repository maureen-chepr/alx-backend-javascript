export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];

  for (const idx in array) {
    if (array.hasOwnProperty(idx)) {
      newArray[idx] = appendString + array[idx];
    }
  }

  return newArray;
}
