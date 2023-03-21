//Objects
const person = {
    name: 'Benjie',
  shirt: 'Green'
  }
  console.log(person.name)
console.log(person.shirt)

person.phone = '1-22-333-444'
console.log(person['phone'])
console.log(person)

/* ES6 arrrow functions(2 arguments)
Created an obect 
using Templat literals
Dynamic input on object
*/
const introducer = (name, shirt) => {
    const person1 ={
      name: name,
      shirt: shirt
    }
  const intro =  'Hi, my name is 
  ${person1.name} and the color of my shirt is ${person1.shirt}' 
    return intro
  }
  console.log(introducer('Benjie', 'Green'))