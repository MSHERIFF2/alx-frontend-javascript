export default function appendToEachArrayValue(array, appendString) {
  const newArray = array;

  for (const values of array) {
    const idx = array.indexOf(values);
    newArray[idx] = appendString + values;
  }
  return newArray;
}
