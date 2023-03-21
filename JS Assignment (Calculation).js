//ADDITION
//  ES5 Syntax: function Add(){}
function add (a,b) {
    return a + b 
  }
  console.log(Sum(5,6))
  num1 = sum(5, 6)
  console.log(num1)
  
  //ES6 Syntax (Arrow function): const add = () => {}
  const add = (a, b) => a+b
console.log(add(5,6))

//SUBTRACTION
//ES5
function sub (a,b) {
  return a - b
}
num2 = sub(5, 6)
console.log(num2(5,6))
//ES6
const sub =(a, b) => a - b
console.log(sub(5, 6))

//DIVISION
//ES5
function div(a,b) {
  return a/b
}
num3 = div(5, 6)
console.log(num3)
//ES6
const div = (a, b) => a/b
console.log (div(5, 6))
//Dividing by Zero
function div(a,b) {
  return a/b
}
num4 = div(5, 0)
console.log (num4)

//MULTIPLICATION
//ES5
function mul(a,b) {
  return a*b 
}
num5 = mul(5, 6)
console.log(num5) 

//ES6
const mul = (a, b) => a*b
console.log (mul(5, 6))

