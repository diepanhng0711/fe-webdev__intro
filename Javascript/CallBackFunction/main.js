//Callback

//Là hàm (function) được truyền qua đối số khi gọi hàm khác

// 1. Là hàm
// 2. Được truyền qua đối số
// 3. Được gọi lại trong hàm nhận đối số

function myFunction(param) {
    console.log(typeof param)
    param('Study Programming')
}

function myCallback(value) {
    console.log('Value: ', value)
}

// myCallback('Hello')

myFunction(myCallback)

var courses = [
    'Javascript',
    'C++',
    'PHP'
]

Array.prototype.map2 = function(callback) {
    var output = []
    var arrayLength = this.length

    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i)
        console.log(result)

        output.push(result)
    }

    return output
}

var htmls = courses.map2(function(course, index) {
    return `<h3>${course}</h3>`
})

console.log(htmls)

console.log(htmls.join('\n'))

Array.prototype.forEach2 = function(callback) {
    for (var i = 0; i < this.length; i++) {
        callback(this[i], i)
    }
}


courses.forEach(function(course, index) {
    console.log(index + " - " + course)
})

courses.forEach2(function(course, index) {
    console.log(index + " - " + course)
})

function logger(log = 'Gia tri mac dinh') {
    console.log(log)
}   

logger(5)

function logger2(log, isAlert) {
    if (isAlert) return alert(log)
}

var course = {
    name: 'C++',
    price: 1250,
    image: 'VN vo doi'
};

var {name, price, image} = course

console.log(name, price, image)