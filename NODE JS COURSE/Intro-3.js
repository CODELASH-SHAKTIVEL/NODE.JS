 // Modules  - Encapsulated Code (only share minimum)
 //CommonJs , every file is module (by default)
 
 const names = require('./Intro-5');
 const sayHI = require ('./Intro-4')
//  console.log(names)

//alternative method of exports 
const data = require('./Intro-6')
console.log(data)

// function of exports 
  sayHI('susan')
  sayHI(names.john)
  sayHI(names.peter) 

  // CALLBACK WITHOUT VARIABLE ASSIGN 
  require('./Intro-7')



 