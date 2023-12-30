String.prototype.yell = function () {
  console.log(this.toUpperCase())
}

// disable push option 1: directly use Array

// Array.prototype.push = function () {
//   console.log('push disabled')
// }

// option 2: reach in via __proto__

const array = [1, 2, 3]
array.__proto__.push = function () {
  console.log('push disabled')
} 
