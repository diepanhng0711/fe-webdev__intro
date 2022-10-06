var myString = "Nguyen Diep Anh"
var myString1 = "      Nguyen Diep   Anh    "

console.log(myString.length)

//console.log(string.indexOf(<substring>, started from index no...))
console.log(myString.indexOf('e', 6))
console.log(myString.lastIndexOf('n'))

console.log(myString.search('e', 6))

console.log('Diep Anh: ' + myString.indexOf("Diep Anh"))

//Cut the string
console.log(myString.slice(7, 11))
console.log(myString.slice(7))
console.log(myString.slice(0))
console.log(myString.slice(-8, -4))
console.log(myString.slice(-8))

//Replace
console.log(myString.replace("Diep Anh", "Viet Duc"))
console.log(myString.replace(/e/g, 'a'))

//Upper/Lower Case
console.log(myString.toUpperCase())
console.log(myString.toLowerCase())

//Trim: loại bỏ khoảng trắng ở 2 đầu
console.log(myString1.trim())

//Split
var languages = 'Javascript, C++, Python'

console.log(languages.split(', '))

//Get a character by index
console.log(myString.charAt(7))