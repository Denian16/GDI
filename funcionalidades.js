function loadXMLDoc(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      myPrueba(this);
    }
  };
  xmlhttp.open("GET", "preguntas-prueba.xml", true);
  xmlhttp.send();
}
function myFuntion(xml){
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Artist</th><th>Title</th></tr>";
   var x = xmlDoc.getElementsByTagName("CD");
   for (i = 0; i <x.length; i++) {
     table += "<tr><td>" +
     x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
     "</td><td>" +
     x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
     "</td></tr>";
   }
   document.getElementById("demo").innerHTML = table;
 }

 function myPrueba(){
	var NInsti = document.getElementById("nombre-insti").value;
  var instru = document.createElement("section");
  instru.setAttribute("class", "instrumento");
  var NInstiH3 = document.createElement("h3");
  NInstiH3.innerHTML = NInsti;
  instru.appendChild(NInstiH3);
	if(document.getElementById("op-name-show").checked && !document.getElementById("op-fecha-show").checked)
	{
		var divFormato = document.createElement("div");
		divFormato.setAttribute("class", "formato-instrumento");
		var pNF = document.createElement("p");
		pNF.innerHTML = "Nombre completo:";
		divFormato.appendChild(pNF);
		instru.appendChild(divFormato);
	 } 
	 else if(!document.getElementById("op-name-show").checked && document.getElementById("op-fecha-show").checked)
	 {
		var divFormato = document.createElement("div");
		divFormato.setAttribute("class", "formato-instrumento");
		var pFF = document.createElement("p");
	 pFF.innerHTML = "Fecha de aplicación:"
	 divFormato.appendChild(pFF);
		 instru.appendChild(divFormato);
	} 
	else if(document.getElementById("op-name-show").checked && document.getElementById("op-fecha-show").checked)
	{
		var divFormato = document.createElement("div");
		divFormato.setAttribute("class", "formato-instrumento");
		var pNF = document.createElement("p");
		pNF.innerHTML = "Nombre completo:";
		divFormato.appendChild(pNF);
		var pFF = document.createElement("p");
		pFF.innerHTML = "Fecha de aplicación:";
		divFormato.appendChild(pFF);
		instru.appendChild(divFormato);
	}
	if(document.getElementById("competencias_0").checked){
		var compH30 = document.createElement("h3");
		compH30.innerHTML = "Alfabetización Estadística";
		instru.appendChild(compH30);
	}
	 if(document.getElementById("competencias_1").checked){
		var compH31 = document.createElement("h3");
		compH31.innerHTML = "Razonamiento Estadístico";
		instru.appendChild(compH31);
	}
  document.getElementById("primario").appendChild(instru);


 }
 function forma_enun(){
	var a_esconder = document.getElementsByClassName("solicitud-enun-img");
	if(document.getElementById("carct-enun_0").checked){
		
		Array.prototype.forEach.call(a_esconder, function(el){
			el.style.display="none";	
		});		
	}
	else if(document.getElementById("carct-enun_1").checked){
		Array.prototype.forEach.call(a_esconder, function(el){
			el.style.display="inline";
		});	
	}
	
 }
 function forma_op(){
	 var textos_op = document.getElementsByClassName("txt-opt");
	 var img_op = document.getElementsByClassName("input-img-opt");

	 if(document.getElementById("carct-opt_0").checked){
		Array.prototype.forEach.call(textos_op, function(img){
			img.style.display="inline";
		});
		 Array.prototype.forEach.call(img_op, function(img){
			 img.style.display="none";
		 });
	 }
	 else if(document.getElementById("carct-opt_1").checked){
		Array.prototype.forEach.call(textos_op, function(img){
			img.style.display="inline";
		});
		Array.prototype.forEach.call(img_op, function(img){
			img.style.display="inline";
		});
	 }
	 else if(document.getElementById("carct-opt_2").checked){
		Array.prototype.forEach.call(textos_op, function(img){
			img.style.display="none";
		});
		Array.prototype.forEach.call(img_op, function(img){
			img.style.display="inline";
		});
	 }
 }
