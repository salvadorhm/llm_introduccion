function send_request() {
    // Leer valores del formulario "datos"
    var prompt = document.forms.datos.prompt.value;

    const PAYLOAD = {
        model:"gemma:2b",
        prompt: prompt,
        stream:false
    };

    const URL = "http://localhost:11434/api/generate";

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
            var p = document.createElement("p");

            // Toma de la respuesta solamente el elemento response
            p.innerHTML = json.response;

            // Lo agrega al <div> responses
            responses.appendChild(p);
        }else{
            alert("Fallo en la conexión con el servidor");
        }
    };
};
