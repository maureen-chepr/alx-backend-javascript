export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const n_int8Array = new Int8Array(length);
  n_int8Array.fill(value, position, position + 1);
  return new DataView(n_int8Array.buffer);
}
