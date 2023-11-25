document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contac form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailInput = document.querySelector(".contac form input[type='email']");
        const email = emailInput.value;

        // Validación simple del correo electrónico
        if (validateEmail(email)) {
            // Almacena el correo electrónico en el archivo JSON (puedes usar un backend para esto)
            storeEmail(email);

            // Puedes agregar un mensaje de éxito o redirigir a una página de agradecimiento
            alert("¡Gracias por suscribirte!");
            emailInput.value = ""; // Limpia el campo de correo electrónico después de enviar
        } else {
            alert("Por favor, ingresa un correo electrónico válido.");
        }
    });

    function validateEmail(email) {
        // Validación simple de correo electrónico
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function storeEmail(email) {
        // Obtiene la lista actual de correos electrónicos almacenados
        let storedEmails = localStorage.getItem("subscribedEmails");
        storedEmails = storedEmails ? JSON.parse(storedEmails) : [];

        // Agrega el nuevo correo electrónico a la lista
        storedEmails.push(email);

        // Almacena la lista actualizada de correos electrónicos
        localStorage.setItem("subscribedEmails", JSON.stringify(storedEmails));
    }
});
