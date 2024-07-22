/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const MAX_VALUE = 20
let sum = 0, currValue = 1;

while (currValue <= MAX_VALUE) {
  if (currValue % 2 !== 0) {
    sum += currValue;
  }
  currValue++;
}
