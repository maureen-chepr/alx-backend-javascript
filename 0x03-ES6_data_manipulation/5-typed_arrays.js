export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const nint8Array = new Int8Array(length);
  nint8Array.fill(value, position, position + 1);
  return new DataView(nint8Array.buffer);
}
