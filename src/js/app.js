export default function canIterate(arg) {
  if (typeof arg[Symbol.iterator] === 'function') {
    return true;
  }
  return false;
}
