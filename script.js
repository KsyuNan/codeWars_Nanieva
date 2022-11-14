// Training JS #1: create your first JS function and print "Hello World!"

function helloWorld () {
  let str = 'Hello World!'
  console.log(str)
}

// Training JS #2: Basic data types--Number

let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250

function equal1 () {
  let a = v1,
    b = v1
  return a + b
}

function equal2 () {
  let a = v4, // set number value to a
    b = v2 // set number value to b
  return a - b
}

function equal3 () {
  let a = v5, // set number value to a
    b = v1 // set number value to b
  return a * b
}

function equal4 () {
  let a = v4, // set number value to a
    b = v5 // set number value to b
  return a / b
}

function equal5 () {
  let a = v6, // set number value to a
    b = v3 // set number value to b
  return a % b
}

// Training JS #3: Basic data types--String

var a1 = 'A',a2 = 'a',b1 = 'B',b2 = 'b',c1 = 'C',c2 = 'c',d1 = 'D',d2 = 'd',e1 = 'E',e2 = 'e',n1 = 'N',n2 = 'n'
function Dad () {
  // select some variable to combine "Dad"
  return d1 + a2 + d2
}
function Bee () {
  // select some variable to combine "Bee"
  return b1 + e2 + e2
}
function banana () {
  // select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2
}

// answer some questions if you finished works above
function answer1 () {
  // the answer should be "yes" or "no"
  return 'no'
}
function answer2 () {
  // the answer should be "yes" or "no"
  return 'no'
}
function answer3 () {
  // the answer should be "yes" or "no"
  return 'yes'
}

// Training JS #5: Basic data types--Object

function animal (obj) {
  return 'This ' + obj.color + ' ' + obj.name + ' ' + 'has ' + obj.legs + ' legs.'
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else

function trueOrFalse (val) {
  return !val ? 'false' : 'true'
}

// Training JS #7: if..else and ternary operator

// Training JS #8: Conditional statement--switch

function howManydays (month) {
  var days
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31
      break
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30
      break
    case 2:
      days = 28
      break

  }
  return days
}

// Training JS #9: loop statement --while and do..while 

// Training JS #10: loop statement --for

function pickIt (arr) {
  var odd = [],even = []
  // coding here

  for (i of arr) {
    if (i % 2 === 0) {
      even.push(i)
    } else {
      odd.push(i)
    }
  }
  return [odd, even]
}

// Training JS #11: loop statement --break,continue

function grabDoll (dolls) {
  var bag = []
  var doll
  // coding here

  for (doll of dolls) {
    if (doll == 'Hello Kitty' || doll == 'Barbie doll') bag.push(doll)
    if (bag.length < 3) continue
    break
  }

  return bag
}

// Training JS #12: loop statement --for..in and for..of

function giveMeFive (obj) {
  arr = []
  // coding here
  for (let key in obj) {
    if (key.length == 5) arr.push(key)
    if (obj[key].length == 5) arr.push(obj[key])
  }
  return arr
}
