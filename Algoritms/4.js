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
 

//Дан массив из N случайных чисел от 100 до 150 расставить массив по убыванию
{
  const N = Math.ceil(Math.random() * 30 + 10)
  const arr = []
  for(let i = 0; i < N; i++){
    arr[i] = Math.ceil(Math.random() * 50 + 100)
  }
  console.log(arr)
  for(let i = N - 1; i > 0; i--){
    for(let j = 0;j < i; j++){
      if(arr[j] < arr[j + 1]){
        let temp = arr[j + 1] 
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  } 
  console.log(arr)
}

{
  const N = Math.ceil(Math.random() * 30 + 10)
  const arr = []
  for(let i = 0; i < N; i++){
    arr[i] = Math.ceil(Math.random() * 50 + 100)
  }
  console.log(arr)
  console.log(arr.sort((a, b)=> b - a))
}

/* Дан массив A ненулевых целых чисел размера 10. Вывести значение
первого из тех его элементов AK, которые удовлетворяют неравенству
AK < A10. Если таких элементов нет, то вывести 0.*/

{
  const N = 10
  const arr = []
  for(let i = 0; i < N; i++){
    arr[i] = Math.ceil(Math.random() * 50) 
  }
  console.log(arr)
  for(let i = 0; i < N - 1; i++){
    if(arr[i] < arr[N - 1]){
      console.log(arr[i])
      break
    }
  }
}

/*	Minmax1◦
. Дано целое число N и набор из N чисел. Найти минимальный и
максимальный из элементов данного набора и вывести их в указанном
порядке.*/
{
  const N = Math.round(Math.random() * 20)
  const arr = []
  
  
  for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 20)
  }
  let min = arr[N - 1]
  let max = arr[N - 1]
  console.log(arr)
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    if(arr[i] < min){
      min = arr[i]
    }
    if(arr[i] > max){
      max = arr[i]
    }
  }
console.log(min, max)
}

/*Minmax10. Дано целое число N и набор из N целых чисел.
 Найти номер первого экстремального (то есть минимального или максимального) элемента
из данного набора.*/
{
  const N = Math.ceil(Math.random() * 20)
  const arr = []
  for(let i = 0; i < N; i++){
    arr[i] = Math.ceil(Math.random() * 30)
  }
  let min = arr[N - 1]
  let max = arr[N - 1]
  let ext = 0
  let minI = 0
  let maxI = 0
  console.log(arr)
  for( let i = 0; i < arr.length; i++){
  if(arr[i] < min){
    min = arr[i]
    minI = i
  }
  if(arr[i] > max){
    max = arr[i]
    maxI = i
  }
  }
  if(minI < maxI){
    ext = minI
  } else{
    ext = maxI
  }
  console.log('--->', ext)
}



/*Minmax6◦ Дано целое число N и набор из N целых чисел. Найти номера
первого минимального и последнего максимального элемента из данного
набора и вывести их в указанном порядке.*/
{
  const N = Math.round(Math.random() * 20)
  const arr = []
  for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 30)
  }
  console.log(arr)
  let min = arr[N - 1]
  let max = arr[N - 1]
  let minI = 0
  let maxI = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
      minI = i
    }
    else if(arr[i] > max){
      max = arr[i]
      maxI = i
    }
  }
  console.log(minI, maxI)
}



/*Minmax1 Дано целое число N и набор из N чисел. Найти минимальный и
максимальный из элементов данного набора и вывести их в указанном
порядке. (Реализовать поиск в цикле генераци массива)*/
{
  {
  const N = Math.round(Math.random() * 20)
  const arr = []
  
  
  for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 20)
  }
  let min = arr[N - 1]
  let max = arr[N - 1]
  console.log(arr)
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
    if(arr[i] < min){
      min = arr[i]
    }
    if(arr[i] > max){
      max = arr[i]
    }
  }
console.log(min, max)
}
}
/*1) Дан массив размера N и целые числа K и L (1 ≤ K ≤ L ≤ N). Найти
сумму элементов массива с номерами от K до L включительно.*/
 {
  const N = Math.round(Math.random() * 20 + 10)
  const L = N - Math.round(Math.random() * 3 + 3)
  const K = L - Math.round(Math.random() * 3 + 2)
  const arr = []
  console.log('-->', N, L, K)
  for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 10)
  }
  console.log(arr)
  let sum = 0
  for(let i = K; i <= L; i++){
    sum = sum + arr[i]
  }
  console.log(sum)
}

/*Series1 Данн массив из десяти вещественных чисел. Найти произведение всех чисел */
{
  const A = 10
  const arr = []
  for(let i = 0; i < A; i++){
    arr[i] = Math.round(Math.random() * 10)
  }
  console.log(arr)
  let mult = 1
  for(let i = 0; i < arr.length; i++){ //тело цикла
    mult = mult * arr[i]
  }
  console.log(mult)
}

/*Series3 Данн массив из N вещественных чисел. Найти их среднее арифметическое.*/
{
const N = Math.round(Math.random() * 10)
const arr = []
for(let i = 0; i < N; i++){
  arr[i] = Math.round(Math.random() * 10)
}
  console.log(arr)
let aver = 0
let sum = 0
for(let i = 0; i < arr.length; i++){
  sum = sum + arr[i]
}
  aver = sum / arr.length
  console.log(aver)
}

/*Series11. Даны целые числа K, N и набор из N целых чисел. Если в наборе
имеются числа, меньшие K, то вывести TRUE; в противном случае вывести
FALSE.*/
{
const K = Math.round(Math.random() * 10)
const N = Math.round(Math.random() * 10)
const arr = []
console.log(K)
for(let i = 0; i < N; i++){
  arr[i] = Math.round(Math.random() * 10)
  if(arr[i] < K){
    console.log(true, arr[i])
  } else{
    console.log(false, arr[i])
  }
}
}


/* Series12. Дан набор ненулевых целых чисел; признак его завершения — число 0. 
Вывести количество чисел в наборе.*/
{
  const arr = []
  for(let i = 0;; i++){
    arr[i] = Math.round(Math.random() * 100)
    if(arr[i] === 0){
      break;
    }
  }
  console.log(arr, arr.length)
}

/*Series23. Дано целое число N (> 2) и набор из N вещественных чисел. Набор
называется пилообразным, если каждый его внутренний элемент либо
больше, либо меньше обоих своих соседей (то есть является «зубцом»).
Если данный набор является пилообразным, то вывести 0; в противном
случае вывести номер первого элемента, не являющегося зубцом.*/
{
  const N = Math.round(Math.random() * 10 + 2)
  const arr = []
  for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 10 + 2)
  }
  console.log(arr)
  let wave = true
  if(arr[0] > arr[1]){
    wave = true
  } else{
    wave = false
  }
  let prevItem = arr[0]
  for(let i = 1; i < N; i++){
    if(wave){
      if(prevItem > arr[i]){
        continue
      }
      if(prevItem < arr[i]){
        console.log(arr[i])
        break
      }
    } else{
      if(prevItem < arr[i]){
        continue
      }
      if(prevItem > arr[i]){
        console.log(arr[i])
        break
      }
    }
    wave = !wave
  }
}

/*Series13. Дан набор ненулевых целых чисел; признак его завершения — число 0. 
Вывести сумму всех положительных четных чисел из данного набора.
 Если требуемые числа в наборе отсутствуют, то вывести 0.*/

{
  const arr = []
  let sum = 0
  for(let i = 0;; i++){
    arr[i] = Math.round(Math.random() * 20 - 10)
    if(arr[i] === 0){
      break;
    }
    if(arr[i] >= 0){
      sum = sum + arr[i]
    }
  }
  

  console.log("Series13", arr, sum)
}

 /*Array48. Дан целочисленный массив размера N.
Найти максимальное количество его одинаковых элементов.*/

{
  const N = Math.round(Math.random() * 10)
  const arr = []
  let count = 0
  for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 10)
    let max = 0
    for(let j = i; j >= 0; j--) {
      if(arr[i] === arr[j]){
        max++
      }
      if(max > count) {
        count = max
      }
    }

  }
  console.log("Array48", count, arr)
}

/*Array49. Дан целочисленный массив размера N. 
Если он является перестановкой, то есть содержит все числа от 1 до N, то вывести 0; в противном
случае вывести номер первого недопустимого элемента.*/

{
  const N = Math.round(Math.random() * 10)
  const arr = []
  console.log('--->', N)
  let match = 0
  outer: for(let i = 0; i < N; i++){
    arr[i] = Math.round(Math.random() * 10)
    for(let j = 0; j <= i; j++){
      if(arr[j] === arr[i] && j !== i){
        match = arr[j]
        break outer;
      }
    }
  }
  console.log('--->', arr, match)
}