// importar
var express = require('express');
var MongoClient=require('mongodb').MongoClient,asser=require('assert');

// instanciar
var app = express();


app.use(express.static('public'));
app.set("view engine","jade");


// ruteo
app.get('/', function(req, res){
  MongoClient.connect('mongodb://127.0.0.1:27017/transito_agil',function(err,db){
          asser.equal(null,err);
          console.log('Connection successfully');

          db.collection('usuarios').find({}).toArray(function(err,docs){
                  res.render('index',{publicaciones:docs});
                  db.close();
          });
          console.log('Called find');
  });
  /*res.writeHead(200,{'Content-type':'text/html'});
  fs.readFile('./html/index.html',null,function(error,data){
    if(error){
      res.writeHead(404);
      res.write('File not found');
    }else{
      res.write(data);
    }
    res.end();
  })*/
});
app.get("/new",function(req,res){
res.render('new/index');

});
app.get("/register",function(req,res){
  res.render('register/index');
})

// escuchar
app.listen(8000);

console.log("Servidor Express escuchando en modo %s", app.settings.env);
