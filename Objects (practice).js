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
    const person ={
        name: name,
        shirt: shirt,
        assets: 100000,
        liabilities: 50000,
        networth: function () {
            return this.assets - this.liabilities
          }
            
        }
      const intro = 'Hi, my name is ${person1.name} and the color of my shirt is ${person3.shirt} and my net worth is $${person.networth()} USD'
        return intro
      }
      console.log(introducer('Benjie', 'Green'))