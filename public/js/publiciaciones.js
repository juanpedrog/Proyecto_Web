var MongoClient=require('mongodb').MongoClient,asser=require('assert');
var codigoHtml="";
MongoClient.connect('mongodb://127.0.0.1:27017/transito_agil',function(err,db){
        asser.equal(null,err);
        console.log('Connection successfully');

        db.collection('usuarios').find({}).toArray(function(err,docs){
                docs.forEach(function(doc){
                      doc.publicacion.forEach(function(pub){
                        codigoHtml=codigoHtml+"<b>"+doc.nombre+"</b>			&nbsp;"+pub.fecha+"			<br>			"+pub.descripcion+"	<img src='../imagenes/imagen.jpg' width='500' height='300'>			<br>						<form method='post'>				"+pub.like+" &nbsp;<input type='image' src='../iconos/like.png' width='20' height='20'>				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+pub.unlike+" &nbsp; <input type='image' src='../iconos/unlike.png' width='20' height='20'>			</form>";
                        console.log(pub.fecha);
                        console.log(codigoHtml);

                      });
                });
                document.getElementById("pub_recientes").innerHTML=codigoHtml;
                db.close();
        });
        console.log('Called find');
});
//document.getElementById("pub_recientes").innerHTML=codigoHtml;
