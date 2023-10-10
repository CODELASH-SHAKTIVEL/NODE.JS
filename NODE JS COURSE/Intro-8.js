// BULID IN  MODULES 

// OS
// PATH
// FS
// HTTP
    

// FIRST MODULE {OS}
const os = require('os')

//Info About Current User
const user = os.userInfo()
console.log(user)

// Method returns the system uptime in seconds 
console.log(`The system Uptime is ${os.uptime()} seconds `)

const currentOS ={
    name : os.type(),
    release: os.release(),
    totalMen: os.totalmem(),
    freeMen: os.freemem(),
}
console.log(currentOS)

// SECOND MODULE {PATH}
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/','subfolder','text.txt')
console.log(filePath)


const base = path.basename(filePath)
console.log(base) // last file name --> direct file name 

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)


// THIRD MODULE {FS} SYNCHORNOUS APPROACH
const {readFileSync,writeFileSync} = require('fs')

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


// THIRD MODULE {FS} ASYNCHORNOUS APPROACH
const { readFile , writeFile } = require('fs')

// ASYNCHOROUS APPRAOCH

// IT WILL THROW AN ERROR IF U DONT USE UTF_8 code 
readFile('./content/first.txt', 'utf-8', (err , result)=>{
 if (err) {
    console.log(err)
    return    
 }
//  console.log(result)
const first = result;
readFile('./content/second.txt','utf-8',(err ,result)=>{
    if (err) {
        console.log(err)
        return    
     }
    //  console.log(result)
    const second = result;
    writeFile(
        './content/result-sync.txt',
    `Here is the result: ${first} , ${second}` , 
    (err,result)=>{
     if (err) {
        console.log(err)
        return
     }
     console.log(result)
    })
})
})
