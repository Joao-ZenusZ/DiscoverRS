/*
Function() constructor
*/
function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está andando"
    }
}
const mayk = new Person('Mayk')
const joao = new Person('Joao')
console.log(joao.walk())
console.log(mayk.walk())