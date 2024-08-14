import fs from 'fs';
import readLine from 'readline-sync'
let text=readLine.question("Enter Some Text: ")
fs.writeFileSync("demo.txt",text+'\n')
read()
console.log("Done File Writing")
let text2= readLine.question("Enter Something to append: ")
fs.appendFileSync("demo.txt",text2+'\n')
read()



function read() {
    let fileData=fs.readFileSync("demo.txt").toString()
console.log("File Content: "+fileData);
}