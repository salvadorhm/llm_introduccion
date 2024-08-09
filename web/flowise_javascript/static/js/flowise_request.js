function send_request() {
    // Leer valores del formulario "datos"
    var prompt = document.forms.datos.prompt.value;

    const PAYLOAD = {
        question:prompt
    };

    const URL = "http://localhost:3000/api/v1/prediction/fef6e278-f39c-4f2d-a157-b8d9f994ff52";

    // Crea un objeto XMLHttpRequest para realizar solicitudes
    var request = new XMLHttpRequest();

    // Abre una conexión asíncrona
    request.open('POST', URL , true);
    // Configura los Headers
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");

    // Envía la petición con los datos
    request.send(JSON.stringify(PAYLOAD));

    // Se ejecuta cuando la respuesta está lista
    request.onload = () => {
        // Valida el status de la respuesta
        if (request.status === 200) {
            // Almacena la respuesta del request
            const response = request.responseText;

            // Lo formatea a JSON
            const json = JSON.parse(response);

            // Lo imprime en la consola para verificar la respuesta
            console.log("response: " + response);
            console.log("json: " + json);
            //Crea un tag <p></p> para insertar la respuesta del prompt
            const responses = document.getElementById("responses");
            var p_ask = document.createElement("p");
            var p_response = document.createElement("p");

            p_ask.setAttribute("style","color:blue;text-align:right");
            p_response.setAttribute("style","color:green;text-align:left");


            // Toma de la respuesta solamente el elemento response
            p_ask.innerHTML = prompt;
            p_response.innerHTML = json.text;

            // Lo agrega al <div> responses
            responses.appendChild(p_ask);
            responses.appendChild(p_response);
        }else{
            alert("Fallo en la conexión con el servidor");
        }
    };
};
