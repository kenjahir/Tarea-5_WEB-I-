document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const cedula = document.getElementById('cedula').value.trim();
        const pais = document.getElementById('pais').value;

        if (nombre === '' || apellido === '' || email === '' || password === '' || telefono === '' || cedula === '' || pais === '') {
            alert('Todos los campos son obligatorios');
            return;
        }
        if (!validarEmail(email)) {
            alert('Por favor ingrese un email válido');
            return;
        }
        // Aquí puedes agregar la lógica para guardar los datos a un servidor que vayamos a crear
        console.log(`Nombre: ${nombre}, Apellido: ${apellido}, Email: ${email}, Contraseña: ${password}, Teléfono: ${telefono}, Cédula: ${cedula}, País: ${pais}`);

        alert('Datos guardados exitosamente');
        
        // Aqui Limpiamos el formulario
        formulario.reset();
    });
    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});
