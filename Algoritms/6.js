
const car1 = {color: "red", engine: "v7", transmisson: "4x4", price: "20000"}
const car2 = {color: "red", engine: "v7", transmisson: "4x4"}

const car2Price = car2.price = "345322"
car1.color = "blue"
const car3 = {}
car3["color"] = "green"
car3.engine = "v3"

console.log(car1, car2, car1.color, car3)

const schoolmateList = [{name: "max", price: 25, amount: 560}, {name: "Jess", price: 33, amount: 390}, {name: "Tim", price: 400, amount: 6345}]

let sum = 0
const calcField = "price"

for (let i = 0; i < schoolmateList.length; i++){
  sum = sum + schoolmateList[i][calcField]
}

console.log(sum)


const human = {name: "Jonh", age: 25, weight: 80, height: 176}
const clonedHuman = {name: human.name, age: human.age, weight: human.weight, height: human.height} // клонирование
const newHuman = human // мутация

newHuman.age = 32
console.log(human, newHuman)

for (let humanField in human) {
  console.log(humanField, human[humanField])
}