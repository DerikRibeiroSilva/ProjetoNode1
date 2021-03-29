const http = require('http');
const fs = require('fs');

const hostname = "127.0.0.1";;
const port = 3000;

fs.writeFile('danki.txt','teste danki code',(err)=>{
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso!');
})



const server = http.createServer((req,res)=>{
    
    if(req.url == '/danki'){

    fs.readFile('index.html', function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();    
    })
    }else{
        return res.end();
    }
    
})


server.listen(port,hostname,() =>{
    console.log("Servidor está rodando");
})
