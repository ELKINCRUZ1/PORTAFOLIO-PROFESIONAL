console.log("¡Hola Elkin! Tu JavaScript funciona.");
alert("Bienvenido al Portafolio de Elkin Cruz!");

// Menú hamburguesa
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Animar barras y mostrar número dentro
window.addEventListener('load', () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const width = bar.style.getPropertyValue('--width').replace('%','').replace(';','');
        bar.style.width = width + '%';
        bar.textContent = width + '%'; // número dentro
        bar.style.color = '#fff';
        bar.style.textAlign = 'right';
        bar.style.paddingRight = '5px';
        bar.style.fontWeight = 'bold';
    });
});



// Validación formulario
const form = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(name && email && message){
        formMsg.style.color = 'green';
        formMsg.textContent = "¡Mensaje enviado correctamente!";
        form.reset();
        setTimeout(() => {
            formMsg.textContent = "";
        }, 3000);
    } else {
        formMsg.style.color = 'red';
        formMsg.textContent = "Por favor completa todos los campos.";
    }
});
