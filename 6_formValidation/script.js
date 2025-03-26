// Seleccionamos los elementos del formulario por su ID
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Agregamos un evento para manejar el envío del formulario
form.addEventListener('submit', e => {
    e.preventDefault(); // Evita el envío automático del formulario
    if (validateInputs()) { // Si la validación es correcta, se borran los campos
        clearFields();
    }
});

// Función para mostrar errores en los campos del formulario
const setError = (element, message) => {
    const inputControl = element.parentElement; // Obtiene el contenedor del input
    const errorDisplay = inputControl.querySelector('.error'); // Busca el contenedor de error

    errorDisplay.innerText = message; // Muestra el mensaje de error
    inputControl.classList.add('error'); // Agrega la clase de error (estilización en CSS)
    inputControl.classList.remove('success'); // Asegura que no tenga la clase de éxito
};

// Función para indicar que un campo está validado correctamente
const setSuccess = element => {
    const inputControl = element.parentElement; // Obtiene el contenedor del input
    const errorDisplay = inputControl.querySelector('.error'); // Busca el contenedor de error

    errorDisplay.innerText = ''; // Borra el mensaje de error
    inputControl.classList.add('success'); // Agrega la clase de éxito
    inputControl.classList.remove('error'); // Quita la clase de error si estaba presente
};

// Función para validar si el email tiene el formato correcto
const isValidEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar emails
    return re.test(String(email).toLowerCase()); // Retorna true si el email es válido
};

// Función para validar los campos del formulario
const validateInputs = () => {
    const usernameValue = username.value.trim(); // Eliminamos espacios en blanco
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    let isValid = true; // Variable para comprobar si todos los campos son correctos

    // Validación del campo de usuario
    if (usernameValue === '') {
        setError(username, 'El nombre de usuario es obligatorio');
        isValid = false;
    } else {
        setSuccess(username);
    }

    // Validación del email
    if (emailValue === '') {
        setError(email, 'El email es obligatorio');
        isValid = false;
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Introduce un email válido');
        isValid = false;
    } else {
        setSuccess(email);
    }

    // Validación de la contraseña
    if (passwordValue === '') {
        setError(password, 'La contraseña es obligatoria');
        isValid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'La contraseña debe tener al menos 8 caracteres');
        isValid = false;
    } else {
        setSuccess(password);
    }

    // Validación de la confirmación de contraseña
    if (password2Value === '') {
        setError(password2, 'Debes confirmar tu contraseña');
        isValid = false;
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Las contraseñas no coinciden');
        isValid = false;
    } else {
        setSuccess(password2);
    }

    return isValid; // Retorna true si todos los campos son válidos
};

// Función para borrar todos los campos después de guardar
const clearFields = () => {
    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';

    // Removemos clases de éxito y error para limpiar la interfaz
    const inputControls = document.querySelectorAll('.input-control');
    inputControls.forEach(control => {
        control.classList.remove('error', 'success');
    });

    console.log('Formulario enviado correctamente y campos limpiados.');
};
