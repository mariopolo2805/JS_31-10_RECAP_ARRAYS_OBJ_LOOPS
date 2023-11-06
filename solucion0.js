// https://www.codewars.com/kata/57eb936de1051801d500008a/train/javascript
// SOLUCION 0

function explode(x) {
  // [2, 3]
  if (typeof x[0] === 'number' && typeof x[1] === 'number') {
    const length = x[0] + x[1]; 
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push(x);
    }
    return list;
  }
  // ['a', 3]
  if (typeof x[0] === 'string' && typeof x[1] === 'number') {
    const length = x[1];
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push(x);
    }
    return list;
  }
  // [6, 'c']
  if (typeof x[0] === 'number' && typeof x[1] === 'string') {
    const length = x[0];
    let list = [];
    for (let i = 0; i < length; i++) {
      list.push(x);
    }
    return list;
  }
  // ['a', 'b']
  if (typeof x[0] === 'string' && typeof x[1] === 'string') {
    return 'Void!';
  }
}