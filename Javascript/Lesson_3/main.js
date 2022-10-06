var age = 18
var PI = 3.14
var test = 96.69696969

var result = 20/ 'HN'

console.log(isNaN(result))

console.log(age)
console.log(age.toString())

//toFixed: làm tròn
console.log(PI.toFixed());      //Converted to String type
console.log(test.toFixed(2))

var languages = [
    'Javascript',
    'C#',
    'Ruby'
]

console.log(languages)
console.log(Array.isArray(languages))

console.log(languages.length)
console.log(languages[1])

console.log(languages.pop())
console.log(languages)

console.log(languages.push("Flutter", 'C++'))
console.log(languages)

console.log(languages.join('- '))

//Xóa đầu mảng
console.log(languages.shift())
console.log(languages)

//Thêm vào đầu mảng
console.log(languages.unshift('Javascript'))
console.log(languages)

languages.splice(1, 1, 'Kotlin')
console.log(languages)

var language2 = [
    'Dart',
    'Ruby'
]

var language3 = [
    'Objective-C',
    'Swift'
]

console.log(language2.concat(language3))
console.log(language2)

console.log(languages.slice(1, 3))
console.log(languages)