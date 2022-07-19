/*Array44. Дан целочисленный массив размера N, содержащий ровно два одинаковых элемента.
 Найти номера одинаковых элементов и вывести эти
номера в порядке возрастания.*/
{
    const arr = [1, 2, 5, 8, 5, 3, 7, 9, 13, 78]
    const arr2 = []
    outer: for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <= i; j++){
            if(arr[j] === arr[i] && j !== i){
                arr2.push(j)
                arr2.push(i)
                break outer;
            }
        }
    }
    console.log(arr2)
}

    /*Array45. Дан массив размера N. Найти номера двух ближайших элементов
    из этого массива (то есть элементов с наименьшим модулем разности) и
    вывести эти номера в порядке возрастания.*/
    {
        const N = Math.round(Math.random() * 30)
        const arr = []
        const arr2 = []
        let diff = N
        for(let i = 0; i <= N; i++){
            arr[i] = Math.round(Math.random() * 30)
            for(let j = 0; j <= i; j++){
                if(Math.abs(arr[j] - arr[i]) < diff && j !== i ){
                    diff = Math.abs(arr[j] - arr[i])
                    arr2.push(j)
                    arr2.push(i)
                }
            }
        }
        console.log('Array45', arr, diff, arr2)
    }





    
   
    
    /*Array53. Даны два массива A и B одинакового размера N. Сформировать новый
    массив C того же размера, каждый элемент которого равен максимальному
    из элементов массивов A и B с тем же индексом.*/
    {
        const N = Math.round(Math.random() * 30)
        const arrA = []
        const arrB = []
        const arrC = []
        let c = 0
        for(let i = 0; i < N; i++){
            arrA[i] = Math.round(Math.random() * 30)
            arrB[i] = Math.round(Math.random() * 30)
            if(arrA[i] > arrB[i]){
                c = arrA[i]
            } else{
                c = arrB[i]
            }
            arrC.push(c)
            console.log('Array53', arrC)
        }


    }
    
    
    
    
   
    
    
     /*Array51. Даны массивы A и B одинакового размера N. Поменять местами их
    содержимое и вывести вначале элементы преобразованного массива A, а
    затем — элементы преобразованного массива B.*/

    {
        const N = Math.round(Math.random() * 30)
        const arrA = []
        const arrB = []
        
        for(let i = 0; i < N; i++){
            arrA[i] = Math.round(Math.random() * 30)
            arrB[i] = Math.round(Math.random() * 30)
        }
        console.log('Array51', arrA, arrB)
        for(let i = 0; i < N; i++){
            let temp = arrA[N - (i + 1)]
            arrA[N - (i + 1)] = arrB[i]
            arrB[i] = temp
        }
        console.log('--->', arrA, arrB)
    }

    /*Array54. Дан целочисленный массив A размера N. 
    Переписать в новый целочисленный массив B все четные числа из исходного массива (в том же
    порядке) и вывести размер полученного массива B и его содержимое.*/
    {
        const N = Math.round(Math.random() * 30)
        const arrA = []
        const arrB = []
        let b = N
        for(let i = 0; i < N; i++){
            arrA[i] = Math.round(Math.random() * 30)
            if(arrA[i] % 2 === 0){
             arrB[arrB.length] = arrA[i]
            
            } 
        }
        console.log('Array54', arrA, arrB, arrB.length)
     }

      /*Array58. Дан массив A размера N. Сформировать новый массив B того же
    размера по следующему правилу: элемент BK равен сумме элементов
    массива A с номерами от 1 до K.*/
    {
        const N = Math.round(Math.random() * 30 + 17)
        const arrA = []
        const arrB = []
        console.log('array 58', N)
        for(let i = 0; i < N; i++){
            arrA[i] = Math.round(Math.random() * 30)
            arrB[i] = 0
            for(let k = 0; k <= i; k++){
                arrB[i] = arrB[i] + arrA[k]
            }
        }
        console.log(arrA, arrB)
    }

    /*Array63. Даны два массива A и B размера 5, элементы которых упорядочены
    по возрастанию. Объединить эти массивы так, чтобы результирующий
    массив C (размера 10) остался упорядоченным по возрастанию.*/
    {
        const N = 5
        const arrA = []
        const arrB = []
        
        for(let i = 0; i < N; i++){
            arrA[i] = Math.round(Math.random() * 30)
            arrB[i] = Math.round(Math.random() * 30)
        }
        arrA.sort((a, b)=> a - b)
        arrB.sort((a, b)=> a - b)
        console.log(arrA, arrB)
        const arrC = arrA.concat(arrB)

        // for(let i = 0, a = 0, b = 0; i < N * 2; i++){
        //     if(arrA[a] > arrB[b]){
        //         arrC[i] = arrA[a]
        //         a++
        //     } else{
        //         arrC[i] = arrB[b]
        //         b++
        //     }
            
        // }
        arrC.sort((a, b)=> a - b)
        console.log(arrC)
    }

    /*Array76. Дан массив размера N. Обнулить все его локальные максимумы (то
        есть числа, большие своих соседей).*/
        {
            const N = Math.round(Math.random() * 30)
            const arr = []
            for(let i = 0; i < N; i++){
                arr[i] = Math.round(Math.random() * 30)
            }
            console.log(arr)
            for(let i = 1; i < N - 1; i++){
                if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1]){
                    arr[i] = 0
                    i++
                }
            }
            console.log(arr) 
        }

       






 /*Array90. Дан массив размера N и целое число K (1 ≤ K ≤ N). Удалить из
массива элемент с порядковым номером K.*/

{ 
    const N = Math.round(Math.random() * 30)
    const arr = []
    const arr2 = []
    const K = N - Math.round(Math.random() * 10)
    for(let i = 0; i < N; i++){
        arr[i] = Math.round(Math.random() * 30)
    }
    console.log(arr)
    for(let i = 0; i < N; i++){
        if(i !== K){
            arr2.push(arr[i])
        }
       
    }
    console.log(arr2)
}



/*Array68◦
. Дан массив размера N. Поменять местами его минимальный и максимальный элементы. HW*/

{
    const arr = []
    const N = Math.round(Math.random() * 30)
    let max = 0
    let min = N
    let temp = 0
    let maxI = 0, minI = 0
    for(let i = 0; i < N; i++){
        arr[i] = Math.round(Math.random() * 10)
        if(arr[i] < min){
            minI = i
            min = arr[i]
        }
        if(arr[i] > max){
            maxI = i
            max = arr[i]
        }
    }
    console.log('Array68', arr)
   temp = arr[maxI]
   arr[maxI] = arr[minI]
   arr[minI] = temp
    console.log(minI, maxI, arr)
    }

    /*Array92. Дан целочисленный массив размера N. 
Удалить из массива все нечетные числа и вывести размер полученного массива и его содержимое. */

{
    const arr = []
    const arr2 = []
    let score = 0 
    const N = Math.round(Math.random() * 30)
    for(let i = 0; i < N; i++){
        arr[i] = Math.round(Math.random() * 30)
        if(arr[i] % 2 === 0){
            arr2.push(arr[i])
        }
    }
    
    console.log('Array92', arr2, arr2.length)
}

/*Дан массив размера N. Поменять порядок его элементов на обратный*/
{
    const arr = []
    const arr2 = []
    const N = Math.round(Math.random() * 30)
    for(let i = 0; i < N; i++){
        arr[i] = Math.round(Math.random() * 30)
    }
    for(let j = arr.length - 1; j >= 0; j--){
        arr2.push(arr[j]) 
    }
   console.log(arr, arr.reverse())
}
