// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
// SOLUCION 1
const generateArray = (x, length) => {
  let list = [];
  for (let i = 0; i < length; i++) {
    list.push(x);
  }
  return list;
};

function explode(x) {
  if (typeof x[0] === 'string') {
    if (typeof x[1] === 'string') {
      return 'Void!';
    } else {
      return generateArray(x, x[1]);
    }
  } else {
    if (typeof x[1] === 'string') {
      return generateArray(x, x[0]);
    } else {
      return generateArray(x, x[0] + x[1]);
    }
  }
}
