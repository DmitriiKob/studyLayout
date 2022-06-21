// Генерация массива

const arr = []

for(let i = 0; i < 10; i++){
  arr[i] = i
}

//console.log(arr)

//
const str = 'Hello World!!!'
const arr1 = []
for(let i = 0; i < str.length; i++){
  arr1[i] = str[i]
}
//console.log(str.split('l')) // the same

let newString = ''
for(let i = 0; i < arr1.length; i++){
  newString = newString + arr1[i]
}
// console.log(arr1.join('')) // the same
// console.log(newString)

const arrRandom = []
for(let i = 0; i < 100; i++){
  arrRandom[i] = Math.random()
}

// console.log(arrRandom)


//Дано целое число N (> 0). Сформировать и вывести целочисленный
// массив размера N, содержащий N первых положительных нечетных чисел:
// 1, 3, 5, . . . .
{
  const N = Math.ceil(Math.random() * 20)
  console.log(N)
  const arr = []

  for(let i = 0; i <= N * 2; i++) {
    if(i % 2 !== 0) {
      arr.push(i)
    }
  }
  console.log(arr)
}

{
  const N = Math.ceil(Math.random() * 20)
  console.log(N)
  const arr = []

  for(let i = 1, j = 0; j < N; i = i + 2, j++) {
      arr[j] = i
  }
  console.log(arr)
}


//Дано целое число N (> 0). Сформировать и вывести целочисленный
// массив размера N, содержащий степени двойки от первой до N-й: 2, 4,
// 8, 16, . . . .

{
  const N = Math.ceil(Math.random() * 20)
  console.log(N)
  let temp = 1
  const arr = []
  for(let i = 0; i < N; i++){
    temp = temp * 2
    arr[i] = temp
  }

  console.log(arr)
}


// Дано целое число N (> 1), а также первый член A и знаменатель D
// геометрической прогрессии. Сформировать и вывести массив размера N,
// содержащий N первых членов данной прогрессии:
// A, A·D, A·D^2, A·D^3, ...


{
  const N = Math.ceil(Math.random() * 10), A = 1.5, D = 2
  console.log(N)
  const arr = []

  for(let i = 0; i < N; i++ ){
    let temp = D
    for(let j = 0; j < i; j++){
      temp = temp * i
    }

    if(i === 0){
      arr[i] = A
    } else {
      arr[i] = A * temp
    }
  }

  console.log(arr)
}


{
  //Дано целое число N (> 2). Сформировать и вывести целочисленный
  // массив размера N, содержащий N первых элементов последовательности
  // чисел Фибоначчи FK:
  // F1 = 1, F2 = 1, FK = FK−2 + FK−1, K = 3, 4, ....

  const N = Math.ceil(Math.random() * 10)
  console.log(N)
  const arr = [1, 1]
  for(let i = 2; i < N; i++){
    arr[i] = arr[i - 2] + arr[i - 1]
  }
  console.log(arr)

}
