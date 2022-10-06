var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    }, 
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'ReactJS',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    }, 
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    },
    {
        id: 6,
        name: 'C++',
        coin: 175
    }, 
    {
        id: 7,
        name: 'Ruby',
        coin: 120
    }
]

// courses.forEach(function(subject, index) {
//     console.log(index, subject)
// })

// var isFree = courses.every(function(course, index) {
//     return course.coin === 0
// })

// console.log(isFree)

// var hasFree = courses.some(function(course, index) {
//     console.log(index)
//     return course.coin === 0
// })

// console.log(hasFree)

// var course = courses.find(function(course, index) {
//     return course.name === 'ReactNative'
// })

// console.log(course)

// var course1 = courses.find(function(course, index) {
//     return course.name === 'C++'
// })

// console.log(course1)

// var courseList = courses.filter(function(course, index) {
//     console.log(index)
//     return course.name === 'ReactJS'
// })

// console.log(courseList)

//ARRAY: MAP & REDUCE

function courseHandler(course, index, originArray) {
    // console.log(course)
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index,
        originArray: originArray
    }
}

var newCourses = courses.map(courseHandler) 

console.log(newCourses)

// var totalCoin = 0 

// for (var course of courses) {
//     totalCoin += course.coin
// }

// console.log(totalCoin)

//Biến lưu trữ
//Thực hiện việc lưu trữ: return giá trị, lưu trữ vào accumulator

//accumulator: biến lưu trữ (0 được gán vào accumulator)

// var i = 0;
// function coinHandler(accumulator, currentValue, currentIndex, originArray) {
//     //i++;

//     var total = accumulator + currentValue.coin

//     console.table({
//         'Lượt chạy': i,
//         'Biến tích trữ': accumulator,
//         'Giá khóa học': currentValue.coin,
//         'Tích trữ được': total
//     })

//     // return accumulator + currentValue.coin
//     return total
// }

function coinHandler(accumulator, currentValue) {
    return accumulator + currentValue.coin
}

var totalCoin = courses.reduce(coinHandler, 0);

console.log(totalCoin)

