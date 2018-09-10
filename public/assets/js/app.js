const app = (function(){

  var name,price,mark,dest,error,btn_verify

const start = function(){

  name = document.getElementById('name');
  price = document.getElementById('price');
  mark = document.getElementById('mark');
  dest = document.getElementById('dest');
  btn_verify = document.getElementById('btn_verify');

  error = document.getElementById('error')

  btn_verify.addEventListener('click',function(e){

      verifyichamp();

      e.preventDefault();


  })


}


const log = function(elem){

  console.log(elem)

}

const verifyichamp = function(){

  if(name.value == "" || price.value == "" || mark.value == "" || dest.value == ""){

      error.innerText = "veiller remplir tout les champs s.v.p";

      error.className = "alert alert-danger"

      console.log(error);


  }else
  {

    error.innerText = "les champs on bien etait remplir !";

    error.className = "alert alert-success";

    creatUser();

  }

}


const doAJAX = function(url,method,clbk,data) {
		const http = new XMLHttpRequest();

		http.open(method,url);
		http.setRequestHeader("Content-Type", "application/json");
		data = data ? JSON.stringify(data) : null;
           if (method.toLowerCase() === "post") {
                if (!data) throw new Error("bad call");
            }

		http.onload = evt => clbk (evt.target.response || evt.srcElement.response);

		http.send(data)

}

const creatUser = function()
{
	const url = "http://localhost:8082/addproduct"

	doAJAX(url,"POST", res => {},{
			name: name.value,
			prix: price.value,
      mark: mark.value,
      dest: dest.value

		})
}


window.addEventListener('DOMContentLoaded', start)



}())
