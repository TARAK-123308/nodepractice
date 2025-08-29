const http = require('http')
const port = 3456
const myserver = http.createServer((request,response)=>{
    response.write("<h1>This is something</h1>")
    response.end();
})
myserver.listen(port,()=>{
    console.log(`Server is running on ${port}`);
    
})