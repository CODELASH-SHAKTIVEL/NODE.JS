// THIRD MODULE {FS} SYNCHORNOUS APPROACH - blocking code executes line by line 
const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt' , 'utf8')
const second  = readFileSync('./content/second.txt'  , 'utf8')

// console.log(first, second)

// SYNCHORNOUS APPROACH
// No need of console.log or Anything
writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first} , ${second}` , 
    {flag:'a'}
)

console.log('done with this task')
console.log('starting the next one')