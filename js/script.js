
//---------- Validación de Formulario -----------//
const formulario = document.querySelector("#formulario_contacto");
const inputNombre = document.querySelector("#nombre_formulario")
const inputApellido = document.querySelector("#apellido_formulario");
const inputEmail = document.querySelector("#email_formulario");
const inputTelefono = document.querySelector("#telefono_formulario");
const selectConsulta = document.querySelector("#consulta_formulario");
const inputCheck = document.querySelector("#condiciones_formulario"); 

formulario.addEventListener("submit", (event) => {
    event.preventDefault()

    nombre = inputNombre.value.trim();
    if(nombre.length >=3){
       //console.log(nombre)
    }
    else if(nombre.length >0 && nombre.length <3){
        const error = document.querySelector(".error_input_nombre");
        error.textContent = "El nombre debe tener como mínimo 3 caracteres."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }
    else{
        const error = document.querySelector(".error_input_nombre");
        error.textContent = "El nombre es obligatorio."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }

    apellido = inputApellido.value.trim();
    if(apellido.length >=3){
       //console.log(apellido)
    }
    else if(apellido.length >0 && apellido.length <3){
        const error = document.querySelector(".error_input_apellido");
        error.textContent = "El apellido debe tener como mínimo 3 caracteres."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }
    else{
        const error = document.querySelector(".error_input_apellido");
        error.textContent = "El apellido es obligatorio."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }

    email = inputEmail.value.trim();
    if(email.length >=3){
       //console.log(email)
    }else{
        const error = document.querySelector(".error_input_email");
        error.textContent = "El correo es obligatorio."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }

    if(inputTelefono.value.length >6 && inputTelefono.value.length <15){
       //console.log(inputTelefono.value)
    }
    else if(inputTelefono.value.length >=15){
        const error = document.querySelector(".error_input_telefono");
        error.textContent = "El teléfono no debe tener mas de 14 digitos."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }
    else if(inputTelefono.value.length >0 && inputTelefono.value.length <7){
        const error = document.querySelector(".error_input_telefono");
        error.textContent = "El teléfono debe tener 7 digitos como mínimo."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }
    else if(inputTelefono.value.length == 0){
        const error = document.querySelector(".error_input_telefono");
        error.textContent = "El telefono es obligatorio."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }

    if(selectConsulta.value == "" || selectConsulta.value == 0){
        const error = document.querySelector(".error_input_consulta");
        error.textContent = "Seleccione una opcion."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }else{
        //console.log(selectConsulta.value);
    }

    if(inputCheck.checked){
        //console.log(inputCheck.value)
    }else{
        const error = document.querySelector(".error_input_condiciones");
        error.textContent = "Acepta los términos y condiciones."
        setTimeout(() => {
            error.textContent = ""
        },3000)
    }
    
})