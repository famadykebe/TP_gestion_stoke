const mysql = require('mysql');

const connect = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "gestoke"

})


connect.connect(function(error){

  if(error)
  {
    console.log("la connexion a echoue");
  }else {
      console.log('connecte')
  }
});



module.exports = connect;
