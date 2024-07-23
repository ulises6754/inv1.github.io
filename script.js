// Obtener elementos del DOM
const container = document.querySelector('.container');
const mario = document.querySelector('.mario');
const luigi = document.querySelector('.luigi');
const coin = document.querySelector('.coin');
const button = document.querySelector('button');

// Agregar evento de clic al botón
button.addEventListener('click', () => {
  // Mostrar mensaje de confirmación
  alert('¡Gracias por confirmar tu asistencia!');
  
  // Agregar efecto de animación al botón
  button.classList.add('animate');
  
  // Quitar efecto de animación después de 2 segundos
  setTimeout(() => {
    button.classList.remove('animate');
  }, 2000);
});

// Agregar evento de mouseover a Mario
mario.addEventListener('mouseover', () => {
  // Cambiar tamaño de Mario
  mario.style.transform = 'scale(1.2)';
  
  // Agregar efecto de sombra a Mario
  mario.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});

// Agregar evento de mouseout a Mario
mario.addEventListener('mouseout', () => {
  // Restaurar tamaño de Mario
  mario.style.transform = 'scale(1)';
  
  // Quitar efecto de sombra a Mario
  mario.style.boxShadow = 'none';
});

// Agregar evento de mouseover a Luigi
luigi.addEventListener('mouseover', () => {
  // Cambiar tamaño de Luigi
  luigi.style.transform = 'scale(1.2)';
  
  // Agregar efecto de sombra a Luigi
  luigi.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
});

// Agregar evento de mouseout a Luigi
luigi.addEventListener('mouseout', () => {
  // Restaurar tamaño de Luigi
  luigi.style.transform = 'scale(1)';
  
  // Quitar efecto de sombra a Luigi
  luigi.style.boxShadow = 'none';
});

// Agregar animación a la moneda
coin.addEventListener('animationiteration', () => {
  // Cambiar posición de la moneda
  coin.style.top = `${Math.random() * 100}%`;
  coin.style.left = `${Math.random() * 100}%`;
});

