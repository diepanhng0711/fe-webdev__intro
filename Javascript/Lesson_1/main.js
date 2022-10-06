var result = "a" && null && "c" && "d"

console.log(result)

if (result) {   
    console.log('DIEU KIEN DUNG')
} else {
    console.log('DIEU KIEN SAI')
}

var result1 = null || 'b' || null || 'd'

console.log(result1);

if (result1) {
    console.log('DIEU KIEN DUNG')
} else {
    console.log('DIEU KIEN SAI')
}

var fullName = "Nguyen Diep Anh"

console.log('\n')
console.log(typeof fullName + ': ' + fullName)
console.log(fullName.length)

var fullName1 = new String('Nguyen Viet Duc')

console.log('\n')
console.log(typeof fullName1 + ': ' + fullName1)

console.log('\n')
console.log('Hello la \'Xin chao\'')

console.log("\n")
console.log("ありがとう la \"Cam on\"")

// console.log('Cách xuống dòng số 2')
// var string1 = 'Nguyen Viet Duc' 
// + 'Gioi tinh: Nam'

// console.log(string1)

var firstName = 'Edwin'
var lastName = 'van der Sar'

console.log(`Toi la: ${firstName} ${lastName}`)