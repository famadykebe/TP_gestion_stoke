const mysql = require('./bdd.js');


const getAfficheProduct  = function(clbk, id){

const q = "SELECT * FROM produit";

mysql.query(q, function(err, result){

  if(err){
    return clbk(err, null)

  }else {
    return clbk(null, result)
  }


});
}

function httpUSER(clbk){

	const url = "http://localhost:8082/api/index";
	const http = require("http");

	http.get(url, function(res) {
    var tmp = "";

    res.on("data", function(data) {
        tmp += data.toString();
    });

    res.on("end", () => {
        clbk(tmp)
    });

    res.on("error", (err) => {
        console.error("error http" + err);
    });

	})
}


module.exports = {
	getAfficheProduct: getAfficheProduct,
  httpUSER: httpUSER
}
