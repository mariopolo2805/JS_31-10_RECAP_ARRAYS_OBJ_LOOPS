// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
// SOLUCION 3
const generateArray = (x, length) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(x);
  }
  return list;
};

function explode(x) {
  return typeof x[0] === 'string' ? (typeof x[1] === 'string' ? 'Void!' : generateArray(x, x[1])) : (typeof x[1] === 'string' ? generateArray(x, x[0]) : generateArray(x, x[0] + x[1]));
}
