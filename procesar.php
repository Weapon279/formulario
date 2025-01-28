<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirmPassword'];

    $errors = [];

    // Validar nombre
    if (strlen($nombre) < 3) {
        $errors[] = "El nombre debe tener al menos 3 caracteres";
    }

    // Validar email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Ingrese un correo electrónico válido";
    }

    // Validar teléfono
    if (!preg_match("/^\d{10}$/", $telefono)) {
        $errors[] = "El número de teléfono debe tener 10 dígitos";
    }

    // Validar contraseña
    if (!preg_match("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/", $password)) {
        $errors[] = "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número";
    }

    // Validar confirmación de contraseña
    if ($password !== $confirmPassword) {
        $errors[] = "Las contraseñas no coinciden";
    }

    if (empty($errors)) {
        echo "Registro exitoso!";
    } else {
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
} else {
    echo "Acceso no autorizado";
}
?>