//MongoDB variable que requiere uso de mongob
var mongodb = require('mongodb');

//variable que enlaza el requerimiento MongoDb con otra
//variable
var MongoClient = mongodb.MongoClient;

// url de direccionamiento
var url = 'mongodb://localhost:27017/fruits';


MongoClient.connect(url,function(err,db){
	if(err){
		//muestra mensaje si hay problemas al conectar
		console.log(err);

	}else{
		// muestra conexion exitosa y cierra la conexion
		console.log('Connected to ',url);
		db.close();
	}



});