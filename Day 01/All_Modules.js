* File Read
const fs  = require ('fs');

const readData = fs.readFileSync('./Day 01/readFile.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

console.log(readData);

* File Write

const fs  = require ('fs');

const wirteData = fs.writeFileSync('./Day 01/writeFile.txt',"Jay Hindi Dosto");

console.log(wirteData);

* Server Creating

const http = require('http');

const server = http.createServer((req,res) => {
    res.write("Hello Dosto Bharat mata ki jay jay hindi");
    res.end();
});

server.listen(3000, () => {
    console.log("Server chalu ho gaya port 3000 pe");
});

* path module
const path = require('path');

console.log("current dircetory:", __dirname);

const filepath = () =>{
    path.join(__dirname, 'backend', 'day 01', 'index.js');
}
console.log("fpath:"+filepath);

const ext = path.extname('./Day 01/All_Modules.js')
console.log(ext);

const Basename = path.basename('./Day 01/All_Modules.js');
console.log(Basename);

const Dirname = path.dirname('./Day 01/All_Modules.js');
console.log(Dirname)

* OS Modules
const os = require('os');

console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.version());
console.log(os.platform())