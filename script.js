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

function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
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

    return isValid;
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearError(id) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = '';
}

function validarFormulario() {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
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

    return isValid;
}

function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
}

function clearError(id) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = '';
}


        // Función para cargar usuarios desde el almacenamiento local
        function cargarUsuarios() {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            const tableBody = document.getElementById('usuariosTableBody');
            tableBody.innerHTML = '';
            usuarios.forEach(usuario => {
                const row = tableBody.insertRow();
                row.insertCell(0).textContent = usuario.nombre;
                row.insertCell(1).textContent = usuario.email;
                row.insertCell(2).textContent = usuario.telefono;
            });
        }

        // Función para limpiar la tabla y el almacenamiento local
        function limpiarTabla() {
            localStorage.removeItem('usuarios');
            cargarUsuarios();
        }

        // Función para abrir el modal
        function abrirModal() {
            document.getElementById('registroModal').style.display = 'block';
        }

        // Función para cerrar el modal
        function cerrarModal() {
            document.getElementById('registroModal').style.display = 'none';
        }

        // Evento de envío del formulario
        document.getElementById('registroForm').addEventListener('submit', function(event) {
            event.preventDefault();
            if (validarFormulario()) {
                const usuario = {
                    nombre: document.getElementById('nombre').value,
                    email: document.getElementById('email').value,
                    telefono: document.getElementById('telefono').value
                };
                guardarUsuario(usuario);
                alert('Usuario registrado con éxito');
                this.reset();
                cerrarModal();
                cargarUsuarios();
            }
        });

        // Función para guardar usuario
        function guardarUsuario(usuario) {
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
            usuarios.push(usuario);
            localStorage.setItem('usuarios', JSON.stringify(usuarios));
        }

        // Cargar usuarios al iniciar la página
        cargarUsuarios();

        // Cerrar el modal si se hace clic fuera de él
        window.onclick = function(event) {
            if (event.target == document.getElementById('registroModal')) {
                cerrarModal();
            }
        }
  