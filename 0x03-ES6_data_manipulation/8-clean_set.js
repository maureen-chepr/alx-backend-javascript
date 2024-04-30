export default function cleanSet(x_Set, x_StartString) {
  if (!x_Set || !x_StartString || !(x_Set instanceof Set) || typeof x_StartString !== 'string') {
    return '';
  }
  return Array.from(x_Set)
    .filter((ele) => ele && ele.startsWith(x_StartString))
    .map((ele) => ele.replace(x_StartString, ''))
    .join('-');
}
