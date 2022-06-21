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
//If12
{
  const A = Math.round(Math.random() * 1000)
  const B = Math.round(Math.random() * 1000)
  const C = Math.round(Math.random() * 1000)
  console.log(A, B, C)
  if(A > B && A > C){
    console.log(A)
  }else if(B > A && B > C){
    console.log(B)
  }else{
    console.log(C)
  }
}


//For5 Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфеt
{
  const A = Math.round(Math.random() * 100)
  console.log(A)
  for(let i = 0.1; i <= 1; i = i + 0.1){
    console.log(A, Math.round(A * i))
  }
}

//For10 Дано целое число "N (> 0)". Найти сумму "1 + 1/2 + 1/3 + . . . + 1/N" (вещественное число).
{
  const N = 100
  let B = 0
  console.log(N)
  
  for(let i = 1; i <= N; i++){
    B = B + 1 / i
  } 
  console.log(B)
}

//For8 Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно.
{
  const A = Math.round(Math.random() * 100)
  const B = A + Math.round(Math.random() * 100)
  let c = 1
  console.log(A, B)

  for(let i = A; i <= B; i++){
    c = c * i
  }
  console.log(c)

}

//For12°. Дано целое число N (> 0). Найти произведение   1.1 · 1.2 · 1.3 · …   (N сомножителей)
{
  const N = Math.round(Math.random() + 1)
  let B = 1
  console.log(N)
  for(let i = 0.1; i <= N; i = i + 0.1){
    B = B * (i + 1)
    console.log (B)
  }
}

//For13°. Дано целое число N (> 0). Найти значение выражения   1.1 – 1.2 + 1.3 – …   (N слагаемых, знаки чередуются). Условный оператор не использовать.
{
  const N = Math.round(Math.random() + 10)
  let B = 1
  let c = -1
  console.log(N)
  for(let i = 0.1; i <= N; i = i + 0.1){
    B = B + (1 + i) * c
    c = c * -1
    console.log(c)
  } 
   console.log(B)
}

//Дано целое число N (> 0). Используя один цикл, найти сумму  1! + 2! + 3! + … + N! 
{
  const N = Math.round(Math.random() * 10)
  let a = 0
  let b = 1
  console.log(N)
  for(let i = 1; i < N; i++ ){
    b = b * i 
    a = a + b
    console.log(b)
  }
  console.log(a)
}

//

// Даны два целых числа A и B (A < B). Вывести в порядке убывания все целые числа, расположенные между A и B (не включая числа A и B), а также количество N этих чисел
{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10 + A)
  console.log(" ---> ", A, B)
  let N = B - A
  for(let i = B - 1; i > A; i--){
  console.log(i)
  }
  console.log(N)
}

/*Спортсмен-лыжник начал тренировки, пробежав в первый день
10 км. Каждый следующий день он увеличивал длину пробега на P процентов от пробега предыдущего дня (P — вещественное, 0 < P < 50). По
данному P определить, после какого дня суммарный пробег лыжника за
все дни превысит 200 км, и вывести найденное количество дней K (целое)
и суммарный пробег S (вещественное число).*/

let run = 10
let day = 1
for(;run <= 200; day++){
  const P = Math.round(Math.random() * 50 - 0.00001)
  run = run + (run * P/100)
} 

console.log(day)
console.log(run)

/*Начальный вклад в банке равен 1000 руб. Через каждый месяц размер вклада увеличивается на P процентов от имеющейся суммы (P —
вещественное число, 0 < P < 25). По данному P определить, через сколько
месяцев размер вклада превысит 1100 руб., и вывести найденное количество месяцев K (целое число) и итоговый размер вклада S (вещественное
число).*/
{
  let money = 1000
  let mounth = 1
  for(; money <=1100; mounth++){
    const P = Math.round(Math.random() * 25 - 0.00001)
    money = money + (money * P/100) / 12
    console.log(P)
  }
  console.log(money)
  console.log(mounth)
}

/*Даны целые положительные числа A и B (A < B). Вывести все целые
числа от A до B включительно; при этом каждое число должно выводиться
столько раз, каково его значение (например, число 3 выводится 3 раза).*/
{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10 + A)
  for(let i = A; i <= B; i++){
    for(let j = 0; j < i; j++){
      console.log(i)
    }
  }
}
/*Даны целые числа A и B (A < B). Вывести все целые числа от A до B
включительно; при этом число A должно выводиться 1 раз, число A + 1
должно выводиться 2 раза и т. д.*/

{
  const A = Math.round(Math.random() * 10)
  const B = Math.round(Math.random() * 10 + A)
  for(let i = 0; i <= B - A; i++){
    for(let j = 0; j <=  i; j++){
      console.log(i + A)
    }
  }
}

// for 38
{
  console.log("------>")
const N = Math.round(Math.random() * 10)

let sum = 0
for(let i = 1; i <= N; i++){
  let pow = i
  for(let j = N - i + 1; j >= 1; j--){
    pow = i * pow
   
  }
  console.log(pow)
  sum = sum + pow
}
console.log("--->", sum)
}

/*Дано целое число N (> 0). С помощью операций деления нацело
и взятия остатка от деления определить, имеется ли в записи числа N
цифра «2». Если имеется, то вывести TRUE, если нет — вывести FALSE*/
{
  const N = Math.round(Math.random() * 1000000000000000 - 1)
  console.log(N)
  let div = 1, isMutch = false
  for( ; N / div > 1; ){
    if(Math.floor(N / div) % 10 === 2){
      isMutch = true
    }
    div = div * 10
  }
  console.log(isMutch)
 
  

  // let a = N
  // console.log("--->", a % 10)
  // a = Math.floor(a / 10)
  
  
}
/*Дана строка. Подсчитать количество содержащихся в ней цифр.*/

{
  const str = "Helloo"
  let count = 0
  for(let i = 0; i < str.length; i++){
    if( parseInt(str[i])){
      count++
    }
  }
  console.log(count)
}


/*Integer19 .
С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.*/
{
  const A = new Date()
  console.log((A.getUTCHours()), A.getUTCMinutes(), A.getUTCSeconds())
  const B =  A.getUTCHours() * 60 + A.getUTCMinutes() + (60 * 3)
  console.log(B)
}

/*If17.
Даны три переменные вещественного типа: A, B, C.
 Если их значения упорядочены по возрастанию или убыванию, то удвоить их; в противном случае заменить значение каждой переменной на противоположное. 
 Вывести новые значения переменных A, B, C.*/
 {
  let A = Math.round(Math.random() * 600)
  let B = Math.round(Math.random() * 600)
  let C = Math.round(Math.random() * 600)
  
  console.log("--->", A, B, C)
  if(A < B && A < C && B < C){
    A = A * 2
    B = B * 2
    C = C * 2
    console.log(A, B, C)
  } else{
    A = A * -1
    B = B * -1
    C = C * -1
    console.log(A, B, C)
  }
 }

 // While6
 const N = Math.round(Math.random() * 20)
 let j = 1
 console.log(N)
 if(N % 2 === 0){
 for(let i = N; i > 2; i = i -2){
   j = i * j
   console.log(j)
 }} else{
  for(let i = N; i > 1; i = i -2){
    j = i * j
    console.log(j)
  }}