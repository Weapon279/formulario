document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registroForm');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validar nombre
        if (nombre.value.length < 3) {
            showError('nombreError', 'El nombre debe tener al menos 3 caracteres');
            isValid = false;
        } else {
            clearError('nombreError');
        }

        // Validar email
        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email.value)) {
            showError('emailError', 'Ingrese un correo electrónico válido');
            isValid = false;
        } else {
            clearError('emailError');
        }

        // Validar teléfono
        if (!/^\d{10}$/.test(telefono.value)) {
            showError('telefonoError', 'El número de teléfono debe tener 10 dígitos');
            isValid = false;
        } else {
            clearError('telefonoError');
        }

        // Validar contraseña
        if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password.value)) {
            showError('passwordError', 'La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número');
            isValid = false;
        } else {
            clearError('passwordError');
        }

        // Validar confirmación de contraseña
        if (password.value !== confirmPassword.value) {
            showError('confirmPasswordError', 'Las contraseñas no coinciden');
            isValid = false;
        } else {
            clearError('confirmPasswordError');
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    function clearError(id) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = '';
    }
});