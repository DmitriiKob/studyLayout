// let a = 0
//
// while(a < 10){
//   a++
//   console.log(a)
// }

// let b = 10
//
// while(b > 0){
//   console.log(b)
//   b--
// }

// let c = 10
//
// do {
//   c = (c + 2) / 3
//   console.log(c)
// } while(c > 1)

// for(let i = 0; i < 10; i++){
//   console.log(i)
// }


let a = 10

for(let i = 0; i < 15; i++){
  if(i % 2 === 0){
    a--
  }
}

console.log(a)


//Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.

{
  const A = Math.ceil(Math.random() * 3)
  const B = 3 + Math.ceil(Math.random() * 5)
  let sum = 0
  console.log(A, B)
  for(let i = A; i <= B; i++){
    sum = sum + i
  }
  console.log(sum)
}

// Дано целое число N (> 0), являющееся некоторой степенью числа 2.
// Найти целое число K — показатель этой степени.

{
  const N = Math.ceil(Math.random() * 10)
  let i = 0, K = 1

  while (i < N) {
    K = K * 2
    i++
  }
  console.log(N, K)
}


// Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел

