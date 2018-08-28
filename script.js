function results(event) 
{
	event.preventDefault();

  

  var ime = "jasmina";
  var sifra = "12345";

	var name = document.getElementById("name").value;
	var psw = document.getElementById("password").value;
	var results = document.getElementById("results");
  var results1 = document.getElementById("pog");
  if(ime == name && sifra == psw)
  {
    var formm = document.getElementById('myForm').style.display = "none";
    var divv = document.getElementById('rez').style.display = "block";
	  results.innerText = "Dobrodošla: " + name + "!";
  }
  else{
    results1.innerText = "Pogrešno uneseni podaci!";
  }
}

function funkcija1(){
  document.getElementById("slikica").style.display = "none";
}
function funkcija2(){
  document.getElementById("slikica").style.width = "100px";
  document.getElementById("slikica").style.height = "100px";
}

function funkcija3(){
  document.getElementById("slikica").style.width = "900px";
  document.getElementById("slikica").style.height = "700px";
}

function funkcija4(){
  document.getElementById("slikica").src = "slike/slika2.jpeg";
}