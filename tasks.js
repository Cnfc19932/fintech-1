/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let arr = string.match(/[+-]?([0-9]*[.])?[0-9]+/g);
  let min,max;

  for (a of arr){
    a = parseFloat(a);
    if (typeof a === 'number' && !isNaN(a)){
      if (min === undefined || min > a) min = a;
      if (max === undefined || max < a) max = a;
    }
  }
  return {min: min, max: max};
  
}

//getMinMax('1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028');
//getMinMax('1.32 32.2 .3 123 13.0001');
/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 1) return 1;
  if (x === 0) return 0;
  return fibonacciSimple(x-2) + fibonacciSimple(x-1);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  //console.log(this.cache);
  if (fibonacciWithCache.cache === undefined){

    fibonacciWithCache.cache = {};
  }
  if (x in fibonacciWithCache.cache){
    return fibonacciWithCache.cache[x];
  }else{
    let a;
    switch(x) {
      case 1: 
        a = 1;
        break; 
      case 0: 
        a = 0;
        break;
      default:
        a = fibonacciWithCache(x-2) + fibonacciWithCache(x-1);
        break;
    }
    fibonacciWithCache.cache[x] = a;
    return a;
  }
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {
  let output = '', count_numbers = max + 1, n = 0, arr = [];
  const lines = Math.ceil(count_numbers/cols);

  const format = (s) => {
    if (s <= 9) return ' ' + s;
    return s;
  }

  if (cols === 0) return ;

  for (let i = 0; i < lines; i++) arr[i] = [];

  for (let i = 0; i < lines; i++)
    for (let j = 0; j < cols; j++){
      arr[i][j] = n < count_numbers ? true : false;
      n++;
    }
  n = 0;
  for (let j = 0; j < cols; j++){
    for (i = 0; i < lines; i++) {
      if (arr[i][j]){
        arr[i][j] = format(n);
        n++;
      }else{
        arr[i][j] = '';
      }
    }
  }


  output = arr.map(s => s.join(' '));

  return output.join('\n');

}

//console.log(printNumbers(0, 3),'\n');
//console.log(printNumbers(1, 3),'\n');
//console.log(printNumbers(11, 3),'\n');
//console.log(printNumbers(12, 3),'\n');
//printNumbers(11, 1);
//printNumbers(11, 2);
//printNumbers(7, 2);
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let last,i,output = '',j = 0;
  const count = (x) => x === 1 ? '' : x;
  for (s of input){
    j++;
    if (last === undefined){
      i = 1;
      last = s;
    }else{
      if (last === s) i++;
      else{
        output += last + count(i);
        i = 1;
        last = s;
      }
    }
    if (j === input.length) output += s + count(i);
  }
  return output;
}

//console.log(rle('AAAB'));
//console.log(rle('BCCDDDEEEE'));