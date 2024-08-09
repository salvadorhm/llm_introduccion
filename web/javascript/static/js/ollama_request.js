function post() {
    // Leer valores del formulario "datos"
    var prompt = document.forms.datos.prompt.value;

    const payload = {
        model:"gemma:2b",
        prompt: prompt,
        stream:false
    };

    const URL = "http://localhost:11434/api/generate";

    console.log("data ", payload);

    // Crea un objeto XMLHttpRequest para realizar solicitudes
    var request = new XMLHttpRequest();
    // Abre una conexión asíncrona
    request.open('POST', URL , true);
    // Configura los Headers
    request.setRequestHeader("Accept", "application/json");
    request.setRequestHeader("Content-Type", "application/json");
    // Envía la petición con los datos
    request.send(JSON.stringify(payload));

    // Se ejecuta cuando la respuesta está lista
    request.onload = () => {
        // Almacena la respuesta del request
        const response = request.responseText;
        // Lo formatea a JSON
        const json = JSON.parse(response);
        // Muestra en consola la respuesta
        if (request.status === 200) {
            console.log("response: " + response);
            console.log("json: " + json);
            console.log("response: " + json.response);

            const responses = document.getElementById("responses");
            var md = document.createElement("md");
            md.innerHTML = json.response;
            responses.appendChild(md);
        }else{
            alert("Fallo en la conexión con el servidor");
        }
    };
};