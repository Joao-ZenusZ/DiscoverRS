// Separar um texto que contem espaços. em um novo array onde cada texto é uma posição do array. Depois disso, tranformar o array em um texto e onde era espaço, colocar _
let phrase = "Eu quero viver o Amor."
let myArray = phrase.split(" ")
console.log(myArray)
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore)