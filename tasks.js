/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  //console.log(this.cache);
  if (this.cache === undefined){
    this.cache = {};
  }
  if (x in this.cache){
    return this.cache[x];
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
    this.cache[x] = a;
    return a;
  }
}

/* ============================================= */