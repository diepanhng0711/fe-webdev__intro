//Includes method

var title = 'Responsive web design'

console.log(title.includes('Responsive'))
console.log(title.includes('Responsive', 12))

var courses = ['C++', 'Javascript', 'Python']

console.log(courses.includes('Ruby'))
console.log(courses.includes('C++'))
console.log(courses.includes('C++', 0))

//Math Object

/*
    - Math.PI
    - Math.round()      -> Làm tròn đến chữ số nguyên (quy tắc thông thường)
    - Math.abs()        -> Trị tuyệt đối
    - Math.ceil()       -> Làm tròn lên (số nguyên)
    - Math.floor()      -> Làm tròn dưới
    - Math.random()     -> Lấy ngẫu nhiên số thập phân nhỏ hơn 1
    - Math.min()
    - Math.max()
*/

console.log(Math.PI)

console.log(Math.round(1.3))

console.log(Math.abs(-5))

console.log(Math.ceil(4.2))

console.log(Math.floor(4.8))

console.log(Math.random())

var isSucceeded = Math.floor(Math.random() * 100) 

if (isSucceeded < 33) {
    console.log('Cường hóa thành công')
} else {
    console.log('Cường hóa thất bại')
}

console.log(Math.max(-10, 5, -18, 9, 0, 27))

console.log(Math.min(-10, 5, -18, 9, 0, 27))


