// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
// SOLUCION 2
const generateArray = (x, length) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(x);
  }
  return list;
};

function explode(x) {
  if (typeof x[0] === 'string') {
    return typeof x[1] === 'string' ? 'Void!' : generateArray(x, x[1]);
  } else {
    return typeof x[1] === 'string' ? generateArray(x, x[0]) : generateArray(x, x[0] + x[1]);
  }
}
