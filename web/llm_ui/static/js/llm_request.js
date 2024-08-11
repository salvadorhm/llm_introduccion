function send_request() {
    // Leer valores del formulario "datos"
    var url = document.forms.datos.url.value;
    var model = document.forms.datos.model.value;
    var prompt = document.forms.datos.prompt.value;

    const PAYLOAD = {
        model: model,
        prompt: prompt,
        seed: 1234,
        temperature: 0.2,
        stream:true
    };

    const URL = url;

    // Crea un objeto XMLHttpRequest para realizar solicitudes
    var request = new XMLHttpRequest();

    // Abre una conexión asíncrona
    request.open('POST', URL , true);
    console.log(request);
    // Configura los Headers
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    //request.responseType = 'json';


    // Envía la petición con los datos
    request.send(JSON.stringify(PAYLOAD));

    const responses = document.getElementById("responses");
    const id = Date.now();
    var p_ask = document.createElement("p");
    var p_response = document.createElement("p");
    p_response.setAttribute('id',id);
    p_ask.setAttribute("style","color:blue;text-align:right");
    p_response.setAttribute("style","color:green;text-align:left");
    p_ask.innerHTML = prompt;

    responses.appendChild(p_ask);
    responses.appendChild(p_response);


    request.onreadystatechange = function() {
        console.log("state change.. state: "+ request.readyState);
        var respuesta = document.getElementById(id);
        if(request.readyState == 3) {
        
          var newData = request.response.substr(request.seenBytes);
          //newData = JSON.parse(request.response);
          var sringify = JSON.stringify(newData);
          var json = JSON.parse(newData);
          //console.log("json: <<" +json+ ">>");
          //console.log("keys: " + Object.keys(json));
          //console.log("keys: " + json.response);
          //console.log(respuesta);

          //document.body.innerHTML += json.response;
          respuesta.innerHTML += json.response;

          //document.body.innerHTML += "New data: <<" +newData+ ">><br />";
      
         request.seenBytes = request.responseText.length;
          //console.log("seenBytes: " +request.seenBytes);
        }
      };


    // Se ejecuta cuando la respuesta está lista
//     request.onload = () => {
//         console.log(request.status);
//         // Valida el status de la respuesta
//         if (request.status === 200) {
//             // Almacena la respuesta del request  
//             const response = request.responseText;
//             // Lo imprime en la consola para verificar la respuesta
//             console.log("response: " + response);

//             // Lo formatea a JSON
//             const json = JSON.parse(response);

            
//             console.log("json: " + json);
//             //Crea un tag <p></p> para insertar la respuesta del prompt
//             const responses = document.getElementById("responses");
//             var p = document.createElement("p");

//             // Toma de la respuesta solamente el elemento response
//             p.innerHTML = json.response;

//             // Lo agrega al <div> responses
//             responses.appendChild(p);
//         }else{
//             alert("Fallo en la conexión con el servidor");
//         }
//     };
 };
