/**
 * OBJECT
 */

// var genderKey = 'gender'

// var myInfo = {
//     name: 'Diep Anh',
//     age: 18,
//     address: 'Nam Dinh, VN',
//     'top-ranking': 1,
//     [genderKey]: 'female',
//     getName: function() {
//         console.log(this.name)
//         return this.name
//     }
// }

// //Them key - value

// myInfo.email = 'diepanhng0711@gmail.com'

// var myKey = 'address'

// console.log(myInfo)

// console.log(myInfo.name)
// console.log(myInfo['address'])
// console.log('\n')

// console.log(myInfo[myKey])

// delete(myInfo.age)

// console.log(myInfo)

// myInfo.getName()

// console.log(myInfo.getName())


/**
 * OBJECT CONSTRUCTOR
 */

// var User = function(...) {//code}

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.avatar = avatar

//     this.getName = function() {
//         return `${this.firstName} = ${this.lastName}`
//     }
// }

// var author = new User('Ánh', 'Nguyễn Diệp', 'Avatar1')

// console.log(author)
// console.log(typeof author)

// console.log(author.constructor)
// console.log(author.constructor == User)

// author.title = 'Tập học lập trình Javascript'

// console.log(author)

// console.log(author.getName())

// User.prototype.age = 15
// User.prototype.getAge = function() {
//     return this.age
// }

// var author1 = new User('Đức', 'Nguyễn Việt', 'Avatar1')

// console.log(author1)
// console.log(author.getAge())

/**
 * DATE
 */

var date = new Date()
console.log(date)
console.log(typeof date)
var year = date.getFullYear()
console.log("\n")
console.log(year)
console.log("\n")

var date1 = Date()
console.log(date1)
console.log(typeof date1)