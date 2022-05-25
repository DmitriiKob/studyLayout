// Integer5 .
// Даны целые положительные числа A и B (A > B). На отрезке длины A размещено максимально возможное количество отрезков длины B (без наложений).
// Используя операцию взятия остатка от деления нацело, найти длину незанятой части отрезка A.

{
  let A = Math.random() * 10 + 1, B = A + (Math.random() * 10 + 1) // https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  A = Math.round(A)
  B = Math.round(B)

  // console.log(A, B, B % A)
}


// Integer6 .
// Дано двузначное число. Вывести вначале его левую цифру (десятки), а затем — его правую цифру (единицы).
// Для нахождения десятков использовать операцию деления нацело, для нахождения единиц — опeрацию взятия остатка от деления.

{//                3              1     2
  const A = Math.round(Math.random() * 100)
 // console.log(A, Math.floor(A / 10), A % 10)
}

/***

 5 > 6 // false
 5 < 6 // true
 55 == 6 // false
 6 >= 6 // true
 6 > 6 // false
 5 > '2' == 5 > 2 // true
 5 > 'rr'
 NaN // false
 0 == false // true
 !0 // true
 !!0 // false
 0 === "0" // false
 1 === "1" // false
 1 === 1 // true

**/


{
  console.log(55 === 6 && true)
}


// https://gist.github.com/Greyewi/91d474d2a44518ebef78ef4567f18e12
// https://gist.github.com/Greyewi/fcc1fda653b0edee61e7f78441c9b52c Базовые концепции, Арифметические операции, Логические выражения

{ // Boolean1 Дано целое число A. Проверить истинность высказывания: «Число A является положительным»
  const A = Math.round(Math.random() * 10 - 5)
  //console.log(A, 0 <= A)
}