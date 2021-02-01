alert( 'Hello, world!' );

//Fetch da una response, (que se podria nombrar de cualquier manera, en este caso nombrada 'response'
// y se puede hacer algo con ella). en este caso la estoy pasando a una funcion anonima definida por la flecha.
//Then es que cuando este la respuesta(ya que es async)

var test = fetch("header.html").then
alert(test);
//fetch("header.html").then({console.log("response")});
//  .then(response => {
//    return response.text()
//  })
//  .then(data => {
//    document.querySelector("header").innerHTML = data;
//  });

//ORIGINAL (CREO QUE EL OTRO NO FUNCIONA POR GITHUB SER RELATIVO NOMAS)
/*fetch("../bars/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });*/