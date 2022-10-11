//HTML DOM

/**
 * 1. Element      : ID, class, tag, CSS selector, HTML collection
 * 2. Attribute    : 
 * 3. Text
 */

// 1.ELEMENT

var headingNode = document.getElementById('heading')

console.log(headingNode)

var headingClass = document.getElementsByClassName('header')

console.log(headingClass)

var headingListItem = document.querySelector('.header')

console.log(headingListItem)

var headingListItem2 = document.querySelector('.header:nth-child(2)')

console.log(headingListItem2)

var headingList = document.querySelectorAll('.header')

console.log(headingList)

var headingFirst = document.querySelector('.first-header')

console.log(headingFirst)