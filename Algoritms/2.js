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
  //console.log(55 === 6 && true)
}


// https://gist.github.com/Greyewi/91d474d2a44518ebef78ef4567f18e12
// https://gist.github.com/Greyewi/fcc1fda653b0edee61e7f78441c9b52c Базовые концепции, Арифметические операции, Логические выражения

{ // Boolean1 Дано целое число A. Проверить истинность высказывания: «Число A является положительным»
  const A = Math.round(Math.random() * 10 - 5)
  //console.log(A, 0 <= A)
}


//Boolean4

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  //console.log(A, B, A > 2, B <= 3)
}




//Boolean7

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  const C = Math.round(Math.random() * 10)
  //console.log(A, B, C, A < B < C)
}

//Boolean2

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  //console.log(A, B, A % 2 == 0, B % 2 == 0)
}

//Boolean9

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  //console.log(A, B, A % 1 == 0 && A % 2 != 0, B % 1 == 0 && B % 2 != 0)
}

//Boolean12

{
  const A = Math.round(Math.random() * 10 - 5)
  const B = Math.round(Math.random() * 10 - 5)
  //console.log(A, B, A >= 0, B >= 0)
}

//Boolean10

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  //console.log(A, B, A%2==1 && B%2==0 || A%2==0 && B%2==1)
}
//Boolean13

{
  const A = Math.round(Math.random() * 10 - 5)
  const B = Math.round(Math.random() * 10 - 5)
  const C = Math.round(Math.random() * 10 - 5)
  //console.log(A, B, C, (A || B || C) >= 0)
}

//Begin8

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  
  //console.log(A, B, (A + B) / 2)
}
//Begin12

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  const C = A + B
  const P = A + B + C
 // console.log(C, P)
}

//Begin24

{
  const a = Math.round(Math.random() * 10)
  const b = Math.round(Math.random() * 10)
  const c = Math.round(Math.random() * 10)
  const A = c
  const C = b
  const B = a
  
  //console.log(A, B, C)
}

//Begin25

{
  const x = Math.round(Math.random() * 10)
  const y = 3 * x - 6 * x - 7

  
  //console.log(y)
}

//Integer2

{
  const M = Math.round(Math.random() * 10000)


  //console.log(Math.floor(M / 1000))
}

//Integer3

{
  const M = Math.round(Math.random() * 10000)

  
  //console.log(Math.floor(M / 1024))
}

//Integer7

{
  const M = Math.round(Math.random() * 100)
  const A = Math.floor(M / 10)
  const B = Math.floor(M % 10)
  const C = A + B
  const D = A * B
  //console.log(C, D)
}



//Boolean3

{
  const A = Math.round(Math.random() * 10)
  

  //console.log(A, A % 2 == 0)
}
//Boolean4

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  //console.log(A, B, A > 2, B <= 3)
}
//Boolean8

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10)
  //console.log(A, B, A%2==1 && B%2==1)
}



//if3
{
  const A = Math.round(Math.random() * 10 - 5)
  if(A > 0) {console.log(A, A + 1)}
  if(A < 0) {console.log(A, A - 2)}
  if(A === 0 && A === -0) {console.log(A, A == 10)}
}

//Boolean23 
{
  const A = Math.round(Math.random() * 10000)
  const fourth = A % 10
  const third = Math.floor((A % 100) / 10)
  const second = Math.floor((A % 1000) / 100)
  const first = Math.floor((A % 10000) / 1000)

  //console.log(A,first, second, third, fourth, first === fourth && third === second)
}

//Integer14
{
  const A = Math.round(Math.random() * 1000)
  const first = Math.floor((A % 1000) / 100)
  const third = A % 10
  const second = Math.floor((A % 100) / 10)
  const B = third * 100 +  first * 10 + second 

  //console.log(A, first, third, second, B)
}

/**
 *
 *
 *
 *
 *   Conditionals
 *
 *
 *
 *
 *
* */


{
const B = 0

// if(B > 0 && false){
//   console.log('this is true')
// }
//
// if(B > 0 && false){
//   console.log('this is true')
// } else if(B <= 0) {
//   console.log('this could be happened')
// } else if(B <= 0) {
//   console.log('this could be happened')
// } else if(B <= 0) {
//   console.log('this could be happened')
//   console.log('this could be happened')
//   console.log('this could be happened')
// } else {
//   console.log('this is never happened')
//
//
//   if(true) console.log("short query")
//
//   B <= 0 ? console.log("yes") : console.log("no")
}


{ // if3 Дано целое число. Если оно является положительным, то прибавить к нему 1; если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести полученное число.

  let A = Math.round(Math.random() * 10 - 5)
  if( A > 0) {
    A++ // A = A + 1
  } else if( A < 0) {
    A-- // A = A - 1
  } else {
    A = 10
  }

  console.log(A)
}



/**
 *
 *
 *
 *
 *   SWITCH case
 *
 *
 *
 *
 *
 * */


{
  const A = Math.ceil(Math.random() * 7)
  console.log(A)
  switch (A) {
    case 1:
      console.log('Monday')
      break
    case 2:
      console.log('Tuesday')
      break
    case 3:
      console.log('Wednesday')
      break
    case 4:
      console.log('Thursday')
      break
    case 5:
      console.log('Friday')
      break
    case 6:
      console.log('Saturday')
      break
    case 7:
      console.log('Sunday')
      break
    default:
      console.log('nope')
  }
}