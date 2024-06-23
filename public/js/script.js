
//---------- Validación de Formulario -----------//
document.querySelector("#formulario_contacto").addEventListener("submit", (event) => {
    event.preventDefault();

    const formulario = document.querySelector("#formulario_contacto");
    const inputNombre = document.querySelector("#nombre_formulario");
    const inputApellido = document.querySelector("#apellido_formulario");
    const inputEmail = document.querySelector("#email_formulario");
    const inputTelefono = document.querySelector("#telefono_formulario");
    const selectConsulta = document.querySelector("#consulta_formulario");
    const inputCheck = document.querySelector("#condiciones_formulario");

    let isValid = true;

    // Limpiar mensajes de error previos
    document.querySelector(".error_input_nombre").textContent = '';
    document.querySelector(".error_input_apellido").textContent = '';
    document.querySelector(".error_input_email").textContent = '';
    document.querySelector(".error_input_telefono").textContent = '';
    document.querySelector(".error_input_consulta").textContent = '';
    document.querySelector(".error_input_condiciones").textContent = '';

    // Validación de Nombre
    const nombre = inputNombre.value.trim();
    const errorNombre = document.querySelector(".error_input_nombre");
    if (nombre.length < 3) {
        errorNombre.textContent = nombre.length > 0 ? "El nombre debe tener como mínimo 3 caracteres." : "El nombre es obligatorio.";
        isValid = false;
    }

    // Validación de Apellido
    const apellido = inputApellido.value.trim();
    const errorApellido = document.querySelector(".error_input_apellido");
    if (apellido.length < 3) {
        errorApellido.textContent = apellido.length > 0 ? "El apellido debe tener como mínimo 3 caracteres." : "El apellido es obligatorio.";
        isValid = false;
    }

    // Validación de Email
    const email = inputEmail.value.trim();
    const errorEmail = document.querySelector(".error_input_email");
    if (!email) {
        errorEmail.textContent = "El correo es obligatorio.";
        isValid = false;
    }

    // Validación de Teléfono
    const telefono = inputTelefono.value.trim();
    const errorTelefono = document.querySelector(".error_input_telefono");
    if (telefono.length < 7 || telefono.length > 14) {
        errorTelefono.textContent = telefono.length === 0 ? "El teléfono es obligatorio." :
                                    telefono.length < 7 ? "El teléfono debe tener 7 dígitos como mínimo." :
                                    "El teléfono no debe tener más de 14 dígitos.";
        isValid = false;
    }

    // Validación de Consulta
    const errorConsulta = document.querySelector(".error_input_consulta");
    if (selectConsulta.value === "") {
        errorConsulta.textContent = "Seleccione una opción.";
        isValid = false;
    }

    // Validación de Términos y Condiciones
    const errorCondiciones = document.querySelector(".error_input_condiciones");
    if (!inputCheck.checked) {
        errorCondiciones.textContent = "Debe aceptar los términos y condiciones.";
        isValid = false;
    }

    if (isValid) {
        alert("Gracias por contactarnos");
        formulario.reset();
    }
});