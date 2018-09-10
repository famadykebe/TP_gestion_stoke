const express = require('express');
const app = express();

const userModel = require('./model/index.js')
const addproduct = require('./model/addproduct.js')
const port = 8082;


app.use(express.static(__dirname +'/public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/view');
app.use('/ejs',express.static(__dirname + '/node_modules/ejs'));


app.use(express.json({})); // to support JSON-encoded bodies

app.locals.composent = {};
app.locals.composent.title = "bizOnline.fr";
app.locals.composent.description = "application utilisant node, express JS, ejs et mysql.";
app.locals.composent.nav = [
  {label: "accueil", route: "/"},
  {label: "ajoute un produit", route: "addproduct"},
  {label: "info site", route: "info"},
];


app.get('/', function(req, res){

	userModel.httpUSER(function(result){
	//	console.log(err);
	// console.log(result.length);
	// return console.log(result);
		res.render('index.ejs',{namestylesheet: "index", title: "ACCUEIL", donnes: JSON.parse(result)})

	})

});


app.get('/api/index', function(req, res){
	userModel.getAfficheProduct(function(err, results) {

		res.send(results)
	})
})

app.get('/addproduct', function(req, res){

		res.render('addproduct.ejs',{namestylesheet: "addproduct", title: "AJOUTE UN ARTICLE"})

})

app.get('/info', function(req, res){
		res.render('info.ejs',{namestylesheet: "info", title: "INFORMATION"})
});

/*--app.post('/addproduct',function(req, res){

    console.log(req.body)


})--*/



app.post('/addproduct', function(req, res){

	addproduct.createUser(function(err, result){

		if(err)
			console.log("c'est pas Ok");

	},{

    nom: req.body.name,
    prix: req.body.prix,
    mark: req.body.mark,
    dest: req.body.dest,

  })

})









app.listen(port);
