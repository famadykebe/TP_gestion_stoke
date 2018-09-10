const connection = require('./bdd.js');


function createUser(clbk, data) {

	var q = "INSERT INTO produit (nom,prix,id_mark,dest) VALUES(?,?,?,?)";

	connection.query(q, [data.nom,data.prix,data.mark,data.dest], (err, res, cols) => {

		if(err){
			return clbk(err, null);
		}else
		{
			return clbk (null, res)
		}

	});

}

module.exports = {
	createUser: createUser

}
