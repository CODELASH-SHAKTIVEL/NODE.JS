// THIRD MODULE {FS} ASYNCHORNOUS APPROACH - useful because it executes by required line by line , if need it can skip one part 
const { readFile , writeFile } = require('fs')

console.log('start');
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
    //  console.log(result)
    console.log('done with the task')
    })
})
})
console.log('starting with next task')
