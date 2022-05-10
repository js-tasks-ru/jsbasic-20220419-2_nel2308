const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
function getMinMax(str) {
  let input = str.split(' ');
  let output = [];
  for (let i = 0; i < input.length; i++) {
    let e = parseFloat(input[i]);
    if (!isNaN(e) && typeof e === 'number') {
      output.push(e);

    }
  }
  let min = Math.min(...output);
  let max = Math.max(...output);
  return {min, max};
}

/* нашла интересное применение map на массив, можно ли как-то применить к данной задаче?
const str = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';
let arr = str.split(' ');
const int = (element) => parseFloat(element, 10);
arr.map(int)
В части parseFloat(element, 10) подсвечивался аргумент element, причина 'Invalid number of arguments, expected 1'.
Сам код хорошо работает без функции, но вот если пытаться реализовать в данной задаче, то на этой ошибке спотыкается
*/
