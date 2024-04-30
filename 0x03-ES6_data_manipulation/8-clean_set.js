export default function cleanSet(nSet, nStartString) {
  if (!nSet || !nStartString || !(nSet instanceof Set) || typeof nStartString !== 'string') {
    return '';
  }
  return Array.from(nSet)
    .filter((ele) => ele && ele.startsWith(nStartString))
    .map((ele) => ele.replace(nStartString, ''))
    .join('-');
}
