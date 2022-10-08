var weight

//tipo de dado é undefined
console.log(typeof weight)

/*
var name = 'Joao'
var age = 22
var stars = 21.5
var isSubscribed = true*/

let student = {
    name : 'Joao',
    age : 22,
    weight: 21.5,
    isSubscribed: true
}
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

var students = [student]
console.log(students)

console.log(students[0])

const john = {
    name: 'John',
    age: 65,
    weight: 98.4,
    isSubscribed: false
}
students[1] = john