        // STREAMS TYPES ---

//  1] WRITEABLE -
//  2] READABLE -
//  3] DUPLEX    -   
//  4]  TRANSFORM -

// const { writeFileSync} = require('fs')
// for (let i = 0; i < 10000; i++) {
//    writeFileSync('./content/big.txt', `hello world ${i}\n` , {flag : 'a'})

// }



 //   STREAMS TYPES --- READ FILE 
// we have 64 kilobytes in console.log 
// const {createReadStream} = require('fs')

// const stream = createReadStream('./content/big.txt')

// stream.on('data' , (result)=>{
//     console.log(result)
// })



//   STREAMS TYPES ---  ADDITIONAL INFORMATION 

const {createReadStream} = require('fs')

// create an error to print an error  
const stream = createReadStream('.cle/content/big.txt', {
    highwaterMark:9000 ,
    encoding : 'utf-8'
})
// default 64kb
//  last buffer - remainder
// highWaterMark - control size 
// const stream = createReadStream('./content/big.txt' , {highWaterMark : 90000})
// const stream = createReadStream('../content/big.txt' , {encoding : 'utf -8 '})

stream.on('data' , (result)=>{
    console.log(result)
})

stream.on('error', (err)=> console.log(err))